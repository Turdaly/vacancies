import { Input } from "@/shared/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RespondFormValues } from "../../app/vacancies/[id]/ui/respond-form";

type FormFieldProps = {
  name: keyof RespondFormValues["userData"];
  register: UseFormRegister<RespondFormValues>;
  errors: FieldErrors<RespondFormValues>;
  placeholder: string;
  validation: {
    required: string;
    validate: (value: string) => string | boolean;
  };
};
export function FormField({
  name,
  register,
  errors,
  placeholder,
  validation,
}: FormFieldProps) {
  return (
    <>
      <Input
        {...register(`userData.${name}`, {
          required: validation.required,
          validate: (value) => validation.validate(value),
        })}
        className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
        placeholder={placeholder}
      />
      {errors.userData?.[name]?.type === "required" && (
        <span className="text-red-400">{errors.userData[name].message}</span>
      )}
      {errors.userData?.[name]?.type === "validate" && (
        <span className="text-red-400">{errors.userData[name].message}</span>
      )}
    </>
  );
}
