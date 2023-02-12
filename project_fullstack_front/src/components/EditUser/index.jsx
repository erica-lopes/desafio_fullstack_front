import "./style.css";
import Modal from "react-modal";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/registerUser";

Modal.setAppElement("#root");

const EditUser = () => {
  const { user, updateUser, deleteUser, modal, openModal, closeModal } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="modalSet">
        <FiSettings
          className="imgConfig"
          alt="imagem engrenagem"
          onClick={openModal}
        />
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modalOverlay"
          className="modalContent"
        >
          <div className="btnedituser">
            <h2>Editar Perfil</h2>
            <button className="btnClose" onClick={closeModal}>
              X
            </button>
          </div>

          <form onSubmit={handleSubmit(updateUser)}>
            <input
              className="inputModalEditUser"
              type="text"
              placeholder="Nome"
              id="name"
              defaultValue={user?.name}
              {...register("name")}
            />
            <small>{errors.name?.message}</small>
            <input
              className="inputModalEditUser"
              type="text"
              placeholder="Email"
              id="email"
              defaultValue={user?.email}
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
            <input
              className="inputModalEditUser"
              type="text"
              placeholder="Contato"
              id="phoneNumber"
              defaultValue={user?.phoneNumber}
              {...register("phoneNumber")}
            />
            <small>{errors.phoneNumber?.message}</small>
            <input
              className="inputModalEditUser"
              type="text"
              placeholder="Senha"
              id="password"
              defaultValue={user?.password}
              {...register("password")}
            />
            <small>{errors.password?.message}</small>

            <button className="btnSave" type="submit">
              Salvar alterações
            </button>

            <h4 className="btntitle">Excluir conta</h4>
            <button onClick={deleteUser} className="btnRemove" type="submit">
              Confirmar Exclusão
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default EditUser;
