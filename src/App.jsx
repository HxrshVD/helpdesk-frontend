import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tickets from "./pages/Tickets";
import TicketDetail from "./pages/TicketDetail";
import NewTicket from "./pages/NewTicket";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/new" element={<NewTicket />} />
      <Route path="/tickets/:id" element={<TicketDetail />} />
    </Routes>
  );
}

export default App;
