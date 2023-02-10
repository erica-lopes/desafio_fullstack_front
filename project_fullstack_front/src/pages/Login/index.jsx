import "./style.css";
import logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../validators/loginUser";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <div className="loginpage">
        <div className="containerr">
          <h1>Login</h1>

          <form onSubmit={handleSubmit(signIn)} className="login">
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
              className="inputpwd"
              placeholder="Senha"
              id="password"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>

            <button type="submit" className="btnlogin">
              acessar
            </button>
          </form>
          <Link to="/register" className="btnregister">
            <p className="btnregister">
              Novo membro? <b>Faça seu cadastro.</b>
            </p>
          </Link>
          <img src={logo} className="logo" alt="puke pili logo" />
        </div>
      </div>
    </>
  );
};

export default Login;
