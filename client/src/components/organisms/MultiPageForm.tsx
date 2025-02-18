import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type Category = {
  id: string;
  name: string;
};

type FormData = {
  title: string;
  categories: Category[];
  description: string;
  price: number;
  rent: number;
  rentOption: string;
};

const MultiStepForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      categories: [],
      description: "",
      price: 0,
      rent: 0,
      rentOption: "",
    },
  });

  const [step, setStep] = useState(0);

  const categoriesOptions = [
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
    { id: "vehicles", name: "Vehicles" },
  ];

  const onSubmit = (data: FormData) => {
    console.log("Final Data:", data);
    alert("Form submitted successfully!");
  };

  // Define validation rules for each step
  const stepValidationFields = {
    0: ["title"],
    1: ["categories"],
    2: ["description"],
    3: ["price", "rent", "rentOption"],
  };

  const nextStep = async () => {
    // Only validate fields for the current step
    const currentStepFields =
      stepValidationFields[step as keyof typeof stepValidationFields];
    const isValid = await trigger(currentStepFields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {step === 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Title</label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    className="w-full border rounded p-2"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Categories</label>
            <Controller
              name="categories"
              control={control}
              rules={{ required: "Please select at least one category" }}
              render={({ field }) => (
                <div>
                  <select
                    multiple
                    className="w-full border rounded p-2"
                    onChange={(e) => {
                      const selected = Array.from(e.target.selectedOptions).map(
                        (option) => ({
                          id: option.value,
                          name: option.text,
                        })
                      );
                      setValue("categories", selected);
                    }}
                  >
                    {categoriesOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  {errors.categories && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.categories.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <div>
                  <textarea
                    {...field}
                    className="w-full border rounded p-2 h-24"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Price</label>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" },
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="number"
                      className="w-full border rounded p-2"
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.price.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Rent</label>
              <Controller
                name="rent"
                control={control}
                rules={{ min: { value: 0, message: "Rent must be positive" } }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="number"
                      className="w-full border rounded p-2"
                    />
                    {errors.rent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.rent.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Rent Option</label>
              <Controller
                name="rentOption"
                control={control}
                rules={{ required: "Please select a rent option" }}
                render={({ field }) => (
                  <div>
                    <select {...field} className="w-full border rounded p-2">
                      <option value="">Select option</option>
                      <option value="hr">Per Hour</option>
                      <option value="day">Per Day</option>
                    </select>
                    {errors.rentOption && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.rentOption.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
