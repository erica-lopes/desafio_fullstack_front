import "./style.css";
import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clientSchema from "../../validators/contactClient";

Modal.setAppElement("#root");

const EditContact = () => {
  const {
    contact,
    updateContact,
    deleteContact,
    modalEditII,
    closeModalII,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientSchema),
  });

  return (
    <>
      <div className="modalSet">
        <Modal
          isOpen={modalEditII}
          onRequestClose={closeModalII}
          contentLabel="Example Modal"
          overlayClassName="modalOverlay"
          className="modalContent"
        >
          <div className="btneditcontact">
            <h2>Editar Contato</h2>
            <button className="btnClose" onClick={closeModalII}>
              X
            </button>
          </div>

          <form onSubmit={handleSubmit(updateContact)}>
            <input
              className="inputModalEditUser"
              type="text"
              id="name"
              defaultValue={contact?.name}
              {...register("name")}
            />
            <small>{errors.name?.message}</small>
            <input
              className="inputModalEditUser"
              type="text"
              id="email"
              defaultValue={contact?.email}
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
            <input
              className="inputModalEditUser"
              type="text"
              id="phoneNumber"
              defaultValue={contact?.phoneNumber}
              {...register("phoneNumber")}
            />
            <small>{errors.phoneNumber?.message}</small>

            <button className="btnSave" type="submit">
              Salvar alterações
            </button>

            <h4 className="btntitle">Excluir contato</h4>
            <button onClick={deleteContact} className="btnRemove" type="submit">
              Confirmar Exclusão
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default EditContact;
