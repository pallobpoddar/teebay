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
    <form onSubmit={handleSubmit(handlerOnSubmit)}>
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
              style={{ border: errors.email && "1px solid red" }}
            />
          )}
        />
        {errors.email && <p>{errors.email.message}</p>}
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
              style={{ border: errors.password && "1px solid red" }}
            />
          )}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <Button type="submit">LOGIN</Button>
    </form>
  );
};

export default SigninForm;
