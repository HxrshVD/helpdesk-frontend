import { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function NewTicket() {
    const [form, setForm] = useState({ title: "", description: "", priority: "MEDIUM" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/tickets", form);
        navigate("/tickets");
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">New Ticket</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
                <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
                <select name="priority" onChange={handleChange} className="w-full p-2 border mb-2 rounded">
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>
                <button className="bg-green-500 text-white p-2 rounded">Create Ticket</button>
            </form>
        </div>
    );
}
