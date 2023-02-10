import "./style.css";
import logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/registerUser";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="loginpage">
        <div className="containerrr">
          <h1>Criar Conta</h1>

          <form onSubmit={handleSubmit(registerUser)} className="login">
            <input
              type="text"
              className="inputname"
              placeholder="Nome"
              id="name"
              {...register("name")}
            />
            <small>{errors.name?.message}</small>
            <input
              type="text"
              className="inputemail"
              placeholder="Email"
              id="email"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
            <input
              type="text"
              className="inputcontact"
              placeholder="Contato"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
            <small>{errors.phoneNumber?.message}</small>
            <input
              type="text"
              className="inputpwd"
              placeholder="Senha"
              id="password"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>

            <button className="btnlogin">registrar</button>
          </form>

          <Link to="/login" className="btnregister">
            <p className="btnregister">
              Novo membro? <b>Faça seu login.</b>
            </p>
          </Link>
          <img src={logo} className="logo" alt="puke pili logo" />
        </div>
      </div>
    </>
  );
};

export default Register;
