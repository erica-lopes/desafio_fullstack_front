import * as yup from "yup";

const clientSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  phoneNumber: yup.string().required("Seu contato é obrigatório"),
});

export default clientSchema;
