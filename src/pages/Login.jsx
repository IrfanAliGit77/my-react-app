import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://dev.patriotmed.id/dashboard-user/LoginDashboard", {
        username,
        password,
      });

      Cookies.set("token", res.data.token, { expires: 1 });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-center text-xl font-bold">Login</h2>
        <input className="w-full p-2 border rounded my-2" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 border rounded my-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;
