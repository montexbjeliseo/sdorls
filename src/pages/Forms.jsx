import { useForm } from "react-hook-form";

import style from "@/styles/forms.module.css";

export const FormsPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const firstName = watch("firstName");

  return (
    <div className={style.container}>
      <h1>Forms</h1>
      <p>This is a form with react-hook-form</p>
      <div className={style.info}>
        <p>First Name (watched): {firstName}</p>
      </div>
      <form
        className={style.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label className={style.label}>
          First Name:
          <input
            placeholder="First Name"
            className={style.input}
            type="text"
            {...register("firstName", { required: true })}
          />
        </label>
        <label className={style.label}>
          Last Name:
          <input
            placeholder="Last Name"
            className={style.input}
            type="text"
            {...register("lastName", { required: true })}
          />
        </label>
        <label className={style.label}>
          Email:
          <input
            placeholder="Email"
            className={style.input}
            type="email"
            {...register("email", {
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
        </label>
        {errors.email && <p className={style.error}>Invalid email</p>}
        <button className={style.button}>Submit</button>
      </form>
    </div>
  );
};
