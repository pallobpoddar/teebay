import { Controller, useForm } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SigninForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlerOnSubmit = async () => {
    const data = {
      email: getValues("email"),
      password: getValues("password"),
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
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            maxLength: {
              value: 320,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <Input
              type="email"
              placeholder="Email"
              autocomplete="on"
              field={field}
              error={errors.email && true}
            />
          )}
        />
        {errors.email && (
          <p className="text-sm text-red-500 my-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            maxLength: {
              value: 20,
              message: "Character limit exceeded",
            },
          }}
          render={({ field }) => (
            <Input
              type="password"
              placeholder="Password"
              autocomplete="on"
              field={field}
              error={errors.password && true}
            />
          )}
        />
        {errors.password && (
          <p className="text-sm text-red-500 my-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" variant="button-primary" text="SIGN IN"></Button>
    </form>
  );
};

export default SigninForm;
