import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  full_name: yup
    .string()
    .required("Full name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),

  avatar: yup
    .mixed()
    .required("Avatar is required")
    .test("fileType", "Only PNG, JPG, SVG allowed", (value) => {
      if (!value || value.length === 0) return false;
      return ["image/png", "image/jpeg", "image/svg+xml"].includes(
        value[0].type
      );
    }),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);

    console.log("Register Data:", data);

  };

  return (
    <div className="mt-5">
      <div className="card p-4 shadow">
        <h3>Register</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("full_name")}
            className="form-control mb-2"
            placeholder="Full Name"
          />
          <small className="text-danger">{errors.full_name?.message}</small>

          <input
            {...register("email")}
            className="form-control mb-2"
            placeholder="Email"
          />
          <small className="text-danger">{errors.email?.message}</small>

          <input
            type="password"
            {...register("password")}
            className="form-control mb-2"
            placeholder="Password"
          />
          <small className="text-danger">{errors.password?.message}</small>

          <input
            type="password"
            {...register("confirmPassword")}
            className="form-control mb-2"
            placeholder="Confirm Password"
          />
          <small className="text-danger">
            {errors.confirmPassword?.message}
          </small>

          <input
            type="file"
            {...register("avatar")}
            className="form-control mb-2"
            accept=".png,.jpg,.jpeg,.svg"
          />
          <small className="text-danger">{errors.avatar?.message}</small>

          <button className="btn btn-primary w-100 mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}