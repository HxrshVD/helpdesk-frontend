import { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", form);
            alert("Registered successfully!");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white p-8 rounded shadow w-96" onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-4">Register</h1>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
                <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">Register</button>
            </form>
        </div>
    );
}

