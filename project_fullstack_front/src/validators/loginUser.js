import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();

export default loginSchema;
