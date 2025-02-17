import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../atoms/Input";

export default function MultiStepForm() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const [step, setStep] = useState(0);
  const fields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
  ];

  const formData = watch();

  const onSubmit = (data) => {
    console.log("Final Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto flex flex-col justify-center h-screen">
      {step < fields.length ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold mb-4">Select a title for your product</h1>
          <Input
            {...register(
              fields[step].name as "firstName" | "lastName" | "email" | "phone",
              { required: `${fields[step].label} is required` }
            )}
            type={fields[step].type}
            className="w-full border rounded p-2 mb-4"
            autoFocus
          />

          <div className="flex justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < fields.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <ul className="mb-4">
            {fields.map((field) => (
              <li key={field.name}>
                <strong>{field.label}:</strong>{" "}
                {formData[field.name as keyof typeof formData]}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setStep(0)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
