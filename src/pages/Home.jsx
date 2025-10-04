import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
                <h1 className="text-2xl font-bold text-blue-600">HelpDesk Mini</h1>
                <nav className="space-x-4">
                    <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                    <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                    <Link to="/tickets" className="text-gray-700 hover:text-blue-600">Tickets</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-700">
                    Manage Support Tickets with Ease
                </h2>
                <p className="max-w-2xl text-gray-600 mb-8">
                    HelpDesk Mini lets you create, track, and resolve tickets efficiently — with role-based
                    access, SLA tracking, and threaded comments. Simplify your support workflow today.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/register"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/login"
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                    >
                        Login
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-gray-500 text-sm bg-white border-t">
                © {new Date().getFullYear()} HelpDesk Mini — All rights reserved.
            </footer>
        </div>
    );
}


