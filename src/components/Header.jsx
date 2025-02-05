import { FaPlus } from "react-icons/fa";

export default function Header() {
return (
    <header className="flex items-center justify-between px-6 py-3 mt-4 shadow-md rounded-xl bg-gradient-to-r from-purple-100 to-white">
      {/* Logo */}
    <a href="/" className="text-2xl font-bold ">
        Tex<span className="font-bold text-purple-500">tilo</span>
    </a>

      {/* Navigation */}
    <div className="flex items-center gap-6">
        {/* New Button */}
        <a
        href="/"
        className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-purple-500 rounded-lg shadow-md hover:bg-purple-600"
        >
        <p className="font-medium">New</p>
        <FaPlus />
        </a>
    </div>
    </header>
);
}
