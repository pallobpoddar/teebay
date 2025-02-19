import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import MultiSelect from "../molecules/MultiSelect";
import Select from "../molecules/Select";
import TextArea from "../atoms/TextArea";
import { GET_ALL_CATEGORIES } from "../../graphql/queries/categories";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_PRODUCT } from "../../graphql/mutations/products";
import { useMutation } from "@apollo/client";
import { toast, ToastContainer } from "react-toastify";
import IProduct from "../../interfaces/IProduct";
import { BeatLoader } from "react-spinners";
import { GET_LOCAL_USER } from "../../graphql/queries/users";

interface IProductResponse {
  success: boolean;
  message: string;
  data: IProduct;
}

type FormData = {
  title: string;
  categoryIds: string[];
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
      categoryIds: [],
      description: "",
      price: 0,
      rent: 0,
      rentOption: "",
    },
  });
  const [step, setStep] = useState(0);
  const { data: categoryData } = useQuery(GET_ALL_CATEGORIES);
  const navigate = useNavigate();
  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT);
  const { data: user } = useQuery(GET_LOCAL_USER);

  if (error) {
    toast.error(error.message);
  }

  const categoryOptions = categoryData?.getAllCategories?.data || [];

  const rentOptions = [
    { value: "", label: "Select an option" },
    { value: "hr", label: "per hr" },
    { value: "day", label: "per day" },
  ];

  const handleResponse = (data: IProductResponse) => {
    if (data.success) {
      navigate(`/users/${data.data.id}/products`);
    } else {
      toast.error(data.message, { theme: "colored" });
    }
  };

  const onSubmit = async (formData: FormData) => {
    try {
      const variables = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        rent: Number(formData.rent),
        rentOption: formData.rentOption,
        categoryIds: formData.categoryIds,
        sellerId: user?.localUser.id,
      };

      const { data } = await createProduct({ variables: variables });
      handleResponse(data.createProduct);
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  const stepValidationFields: Record<number, Array<keyof FormData>> = {
    0: ["title"],
    1: ["categoryIds"],
    2: ["description"],
    3: ["price", "rent", "rentOption"],
  };

  const nextStep = async () => {
    const currentStepFields = stepValidationFields[step];
    const isValid = await trigger(currentStepFields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <ToastContainer />
      {step === 0 && (
        <div className="space-y-2">
          <p className="text-2xl font-medium text-jet-black text-center">
            Select a title for your product
          </p>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <Input field={field} type="text" error={errors.title && true} />
            )}
          />

          {errors.title && (
            <p className="text-sm text-red-500 my-1">{errors.title.message}</p>
          )}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-2">
          <p className="text-2xl font-medium text-jet-black text-center">
            Select Categories
          </p>
          <Controller
            name="categoryIds"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <MultiSelect
                options={categoryOptions}
                placeholder="Select a category"
                onChange={(selected) => {
                  field.onChange(selected);
                  setValue(
                    "categoryIds",
                    selected.map((option) => option.id)
                  );
                }}
                error={errors.categoryIds && true}
              />
            )}
          />

          {errors.categoryIds && (
            <p className="text-red-500 text-sm my-1">
              {errors.categoryIds.message}
            </p>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <p className="text-2xl font-medium text-jet-black text-center">
            Select Description
          </p>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <TextArea
                rows={8}
                field={field}
                error={errors.description && true}
              />
            )}
          />

          {errors.description && (
            <p className="text-red-500 text-sm my-1">
              {errors.description.message}
            </p>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-2xl font-medium text-jet-black text-center">
              Select Price
            </p>
            <Controller
              name="price"
              control={control}
              rules={{
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
              }}
              render={({ field }) => (
                <div>
                  <Input
                    field={field}
                    type="number"
                    placeholder="Purchase price"
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

          <div className="flex gap-8">
            <div className="space-y-2 w-1/2">
              <label className="block text-sm font-medium">Rent</label>
              <Controller
                name="rent"
                control={control}
                rules={{ min: { value: 0, message: "Rent must be positive" } }}
                render={({ field }) => (
                  <div>
                    <Input field={field} type="number" />
                    {errors.rent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.rent.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="space-y-2 w-1/2">
              <label className="block text-sm font-medium">Rent Option</label>
              <Controller
                name="rentOption"
                control={control}
                rules={{ required: "Rent option is required" }}
                render={({ field }) => (
                  <div>
                    <Select options={rentOptions} field={field} />
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
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 0 && (
          <Button
            type="button"
            variant="button-primary"
            text="Back"
            onClick={prevStep}
          />
        )}

        {step < 3 ? (
          <Button
            type="button"
            variant="button-primary"
            text="Next"
            onClick={nextStep}
            className="ml-auto"
          />
        ) : (
          <Button type="submit" variant="button-primary">
            {loading ? <BeatLoader color="white" size={8} /> : "Submit"}
          </Button>
        )}
      </div>
    </form>
  );
};

export default MultiStepForm;
