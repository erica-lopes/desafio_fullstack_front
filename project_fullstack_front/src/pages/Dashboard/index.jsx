import "./style.css";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ImExit } from "react-icons/im";
import EditUser from "../../components/EditUser";
import AddContact from "../../components/AddContact";
import EditContact from "../../components/EditContact";
import { AiFillEdit } from "react-icons/ai";

const Dashboard = () => {
  const { user, logout, contacts, setContacts, openModalII, setContact } =
    useContext(AuthContext);

  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.startsWith(search)
  );

  useEffect(() => {
    api
      .get("user/clients", {
        params: {
          offset: 0,
          limit: 50,
        },
      })
      .then((response) => {
        setContacts(response.data);
      });
  }, []);

  const updateContact = (contact) => {
    setContact(contact);
    openModalII();
  };

  return (
    <>
      <div className="content">
        <div className="obj">
          <header className="headerDash">
            <h1 className="welcomeUser">Olá, {user.name}</h1>
            <div className="btnConfig">
              <EditUser />
              <ImExit onClick={logout} className="imgConfig" />
            </div>
          </header>

          <div className="search">
            <form action="">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="inputsearch"
                type="text"
                placeholder="Buscar"
              />
            </form>
          </div>

          <AddContact />

          <section className="contacts">
            <section className="contactActive">
              <div className="title">
                <div className="text">
                  <h4>Ativos</h4>
                </div>
                <div className="counter">
                  <h4>{contacts.length}</h4>
                </div>
              </div>

              <ul className="card">
                {filteredContacts.map((contact) => (
                  <li key={contact.name} className="contentContact">
                    <div className="imgContact">
                      <p>
                        <b>{contact.name[0]}</b>
                      </p>
                    </div>

                    <div className="data">
                      <b>{contact.name}</b>
                      <p>{contact.phoneNumber}</p>
                      <p>{contact.email}</p>
                      <p>{contact.registrationDate}</p>
                    </div>
                    <div className="btnEdit">
                      <AiFillEdit
                        type="button"
                        className="btns"
                        onClick={() => updateContact(contact)}
                      />
                      <EditContact />
                    </div>
                  </li>
                ))}
              </ul>
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
