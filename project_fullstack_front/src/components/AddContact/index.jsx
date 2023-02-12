import "./style.css";
import Modal from "react-modal";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clientSchema from "../../validators/contactClient";
import { RiUserAddFill } from "react-icons/ri";

Modal.setAppElement("#root");

const AddContact = () => {
  const { contact, registerContact, modalEditI, openModalI, closeModalI } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientSchema),
  });

  return (
    <>
      <section className="secadd">
        <button className="add">
          <p>Adicione um contato</p>
          <RiUserAddFill
            onClick={openModalI}
            className="imgAdd"
            alt="imagem-add"
          />
        </button>
        <div className="modalSet2">
          <Modal
            isOpen={modalEditI}
            onRequestClose={closeModalI}
            contentLabel="Example Modal"
            overlayClassName="modalOverlay2"
            className="modalContent2"
          >
            <div className="btnadd">
              <h2>Adicionar Contato</h2>
              <button className="btnClose2" onClick={closeModalI}>
                X
              </button>
            </div>

            <form onSubmit={handleSubmit(registerContact)}>
              <input
                className="inputModalEditUser2"
                type="text"
                placeholder="Nome"
                id="name"
                defaultValue={contact?.name}
                {...register("name")}
              />
              <small>{errors.name?.message}</small>
              <input
                className="inputModalEditUser2"
                type="text"
                placeholder="Email"
                id="email"
                defaultValue={contact?.email}
                {...register("email")}
              />
              <small>{errors.email?.message}</small>
              <input
                className="inputModalEditUser2"
                type="text"
                placeholder="Contato"
                id="phoneNumber"
                defaultValue={contact?.phoneNumber}
                {...register("phoneNumber")}
              />
              <small>{errors.phoneNumber?.message}</small>

              <button className="btnSave2" type="submit">
                Salvar contato
              </button>
            </form>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default AddContact;
