import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// schema
const registerSchema = z.object({
  email: z.string().email("Format email tidak valid"),

  password: z.string().min(8, "Password minimal 8 karakter"),
});

// infer type otomatis
type FormProps = z.infer<typeof registerSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(registerSchema),
  });

  const submitHandler = async (data: FormProps) => {
    // simulasi loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data);

    alert("Login berhasil");
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h1>Login Form</h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* EMAIL */}
        <input type="text" placeholder="Email" {...register("email")} />

        {/* EMAIL ERROR */}
        {errors.email && (
          <small style={{ color: "crimson" }}>{errors.email.message}</small>
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {/* PASSWORD ERROR */}
        {errors.password && (
          <small style={{ color: "crimson" }}>{errors.password.message}</small>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
