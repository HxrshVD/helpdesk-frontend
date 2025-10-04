import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";

export default function TicketDetail() {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchTicket = async () => {
            const { data } = await axios.get(`/tickets/${id}`);
            setTicket(data);
        };
        fetchTicket();
    }, [id]);

    const handleComment = async () => {
        await axios.post(`/tickets/${id}/comments`, { content: comment });
        setComment("");
        const { data } = await axios.get(`/tickets/${id}`);
        setTicket(data);
    };

    if (!ticket) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl">{ticket.title}</h1>
            <p className="mb-2">{ticket.description}</p>
            <p className="mb-4">Status: {ticket.status}</p>

            <h2 className="text-xl mt-4">Comments</h2>
            <ul>
                {ticket.comments?.map(c => (
                    <li key={c._id} className="border p-2 mb-2 rounded">{c.content}</li>
                ))}
            </ul>

            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="Add comment"
            />
            <button onClick={handleComment} className="bg-blue-500 text-white p-2 rounded">Add Comment</button>
        </div>
    );
}
