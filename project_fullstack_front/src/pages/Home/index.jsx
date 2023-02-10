import "./style.css";
import img_home_1 from "../../assets/componente_home.png";
import img_home_2 from "../../assets/modelo1.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <p className="titlehome">
            Bem vindo a <b>sua agenda</b>
          </p>
          <div>
            <img src={img_home_1} className="image" alt="imagem abstrata" />
          </div>

          <div className="buttondiv">
            <Link to="/login" className="buttonentry">
              entrar
            </Link>
            <img src={logo} className="logo" alt="puke pili logo" />
          </div>
        </div>
        <img className="imageback" src={img_home_2} />
      </div>
    </>
  );
};

export default Home;
