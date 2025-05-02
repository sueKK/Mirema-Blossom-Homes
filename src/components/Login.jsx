import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 px-5 py-6">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg px-6 py-5">
        <h2 className="text-lg font-semibold text-center mb-3">Admin Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
