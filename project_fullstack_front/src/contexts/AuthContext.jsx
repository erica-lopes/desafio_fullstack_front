import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

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
    await api.post("login", data).then((response) => {
      const token = response.data.token;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.clear();
      localStorage.setItem("@pukepili:token", token);

      navigate("/dashboard", { replace: true });
    });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
