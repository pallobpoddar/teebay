import { Controller, useForm } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SignupForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handlerOnSubmit = async () => {
    const data = {
      name: getValues("firstName") + " " + getValues("lastName"),
      address: getValues("address"),
      email: getValues("email"),
      phone: getValues("phone"),
      password: getValues("password"),
      confirmPassword: getValues("confirmPassword"),
    };
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-5 my-5"
      onSubmit={handleSubmit(handlerOnSubmit)}
    >
      <div>
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: "First name is required",
            maxLength: { value: 50, message: "Character limit exceeded" },
          }}
          render={({ field }) => (
            <Input
              placeholder="First name"
              autocomplete="on"
              field={field}
              style={{ border: errors.firstName && "1px solid red" }}
            />
          )}
        />

        {errors.firstName && (
          <p className="text-sm my-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: "Last name is required",
            maxLength: { value: 50, message: "Character limit exceeded" },
          }}
          render={({ field }) => (
            <Input
              placeholder="Last name"
              autocomplete="on"
              field={field}
              style={{ border: errors.lastName && "1px solid red" }}
            />
          )}
        />

        {errors.lastName && (
          <p className="text-sm my-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="address"
          control={control}
          rules={{
            required: "Address is required",
            maxLength: { value: 100, message: "Character limit exceeded" },
          }}
          render={({ field }) => (
            <Input
              placeholder="Address"
              autocomplete="on"
              field={field}
              style={{ border: errors.address && "1px solid red" }}
            />
          )}
        />

        {errors.address && (
          <p className="text-sm my-1">{errors.address.message}</p>
        )}
      </div>

      <div className="flex gap-5 items-center justify-between">
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              maxLength: { value: 320, message: "Invalid email format" },
              pattern: {
                value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Email"
                type="email"
                autocomplete="on"
                field={field}
                style={{ border: errors.email && "1px solid red" }}
              />
            )}
          />

          {errors.email && (
            <p className="text-sm my-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is required",
              maxLength: { value: 20, message: "Character limit exceeded" },
            }}
            render={({ field }) => (
              <Input
                placeholder="Phone Number"
                autocomplete="on"
                field={field}
                style={{ border: errors.phone && "1px solid red" }}
              />
            )}
          />

          {errors.phone && (
            <p className="text-sm my-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Character limit exceeded",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])[A-Za-z\d~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,20}$/,
              message:
                "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol",
            },
          }}
          render={({ field }) => (
            <Input
              placeholder="Password"
              type="password"
              autocomplete="on"
              includePasswordIcon
              field={field}
              style={{ border: errors.password && "1px solid red" }}
            />
          )}
        />

        {errors.password && (
          <p className="text-sm my-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
          render={({ field }) => (
            <Input
              placeholder="Confirm Password"
              type="password"
              includePasswordIcon
              field={field}
              style={{ border: errors.password && "1px solid red" }}
            />
          )}
        />

        {errors.password && (
          <p className="text-sm my-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit">REGISTER</Button>
    </form>
  );
};

export default SignupForm;
