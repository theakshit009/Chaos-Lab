import { useState } from "react";
import { register } from "../apis/authApi";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(email, password);
      navigate("/dashboard");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-80 space-y-4 border border-zinc-800 p-6 rounded-xl">
        <h1 className="text-lg font-semibold text-white">
          Create Account
        </h1>

        <input
          className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-emerald-600 p-2 rounded"
        >
          Register
        </button>

        <p className="text-xs text-zinc-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
