import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  phoneNumber: yup.string().required("Seu contato é obrigatório"),
  password: yup
    .string()
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Formato: 8 caracteres, 1 letra maiúscula, 1 minúscula, 1 número e 1 caracter especial!"
    )
    .required("Senha é obrigatória"),
});

export default schema;
