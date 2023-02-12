import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalEditI, setModalEditI] = useState(false);
  const [modalEditII, setModalEditII] = useState(false);

  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  const logout = async () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function openModalI() {
    setModalEditI(true);
  }

  function closeModalI() {
    setModalEditI(false);
  }

  function openModalII() {
    setModalEditII(true);
  }

  function closeModalII() {
    setModalEditII(false);
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@pukepili:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("user/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const registerUser = async (data) => {
    await api
      .post("user", data)
      .then((response) => {
        navigate("/login", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const signIn = async (data) => {
    await api
      .post("login", data)
      .then((response) => {
        const token = response.data.token;

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        localStorage.clear();
        localStorage.setItem("@pukepili:token", token);

        navigate("/dashboard", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const updateUser = async (data) => {
    await api
      .patch("user", data)
      .then((response) => {
        setModal(false);
        navigate("/dashboard", { replace: true });
        window.location.reload(true);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = async () => {
    const id = user.id;
    await api
      .delete(`user/${id}`)
      .then((response) => {
        setModal(false);
        localStorage.clear();
        setUser(null);
        navigate("/login", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const registerContact = async (data) => {
    await api
      .post("clients", data)
      .then((response) => {
        setContact(data);
        setModalEditI(false);
        navigate("/dashboard", { replace: true });
        window.location.reload(true);
      })
      .catch((error) => console.error(error));
  };

  const updateContact = async (data) => {
    // await api
    //   .patch(`clients/${contact}`, data)
    //   .then((response) => {
    //     const findContact = contacts?.find((c) => c.id === contact);
    //     const contactIndex = contacts?.indexOf(findContact);
    //     contacts?.splice(contactIndex, 1, data);
    //     setModalEditII(false);
    //     navigate("/dashboard", { replace: true });
    //     window.location.reload(true);
    //   })
    //   .catch((error) => console.error(error));
  };

  const deleteContact = async () => {
    // await api
    //   .delete(`clients/${contact}`)
    //   .then((response) => {
    //     const findContact = contacts?.find((c) => c.id === contact);
    //     const contactIndex = contacts?.indexOf(findContact);
    //     contacts?.splice(contactIndex, 1);
    //     setModalEditII(false);
    //   })
    // .catch((error) => console.error(error));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        contact,
        contacts,
        setContacts,
        setContact,

        signIn,
        loading,
        logout,
        registerUser,
        updateUser,
        deleteUser,

        //edit user
        modal,
        setModal,
        openModal,
        closeModal,

        //add contact
        registerContact,
        openModalI,
        closeModalI,
        modalEditI,
        setModalEditI,

        //edit contact
        updateContact,
        deleteContact,
        openModalII,
        closeModalII,
        modalEditII,
        setModalEditII,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
