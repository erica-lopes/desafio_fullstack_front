import "./style.css";
import imgConfig from "../../assets/config.svg";
import logo from "../../assets/logo.svg";
import edit1 from "../../assets/edit.svg";
import edit2 from "../../assets/remove.svg";

const Dashboard = () => {
  return (
    <>
      <div className="content">
        <div className="obj">
          <header className="headerDash">
            <h1 className="welcomeUser">Olá, "Usuário"</h1>
            <img
              src={imgConfig}
              className="imgConfig"
              alt="imagem engrenagem"
            />
          </header>

          <div className="search">
            <input className="inputsearch" type="text" placeholder="Buscar" />
          </div>

          <section className="contacts">
            <section className="contactActive">
              <div className="title">
                <div className="text">
                  <h4>Ativos</h4>
                </div>
                <div className="counter">
                  <h4>4</h4>
                </div>
              </div>

              <ul className="card">
                <div className="imgContact">
                  <p>A</p>
                </div>

                <li className="contentContact">
                  <p>
                    <b>Nome do contato</b>
                  </p>
                  <p>Telefone</p>
                  <p>Email</p>
                  <p>Data de cadastro</p>
                </li>

                <div className="btnEdit">
                  <img className="btns" src={edit1} alt="imagem editar" />
                  <img className="btns" src={edit2} alt="imagem remover" />
                </div>
              </ul>
            </section>

            <section className="contactInactive">
              <div className="title">
                <div className="text">
                  <h4>Inativos</h4>
                </div>
                <div className="counter">
                  <h4>2</h4>
                </div>
              </div>
            </section>
          </section>

          <footer className="footerDash">
            <img src={logo} className="logo" alt="puke pili logo" />
            <small className="footer">
              Sua agenda de contatos prática e segura!
            </small>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
