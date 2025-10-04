import { useEffect, useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";

export default function Tickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const { data } = await axios.get("/tickets");
                setTickets(data);
            } catch (err) {
                alert("Failed to fetch tickets", err);
            }
        };
        fetchTickets();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">Tickets</h1>
            <Link to="/tickets/new" className="mb-4 inline-block bg-blue-500 text-white p-2 rounded">New Ticket</Link>
            <ul>
                {tickets.map(t => (
                    <li key={t._id} className="border p-2 mb-2 rounded">
                        <Link to={`/tickets/${t._id}`}>{t.title} - {t.status}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
