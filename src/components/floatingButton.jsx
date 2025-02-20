import { FaPlus } from "react-icons/fa";

export const FloatingButton = () => {
    return (
        <button 
            className="fixed bottom-12 right-12 bg-secondary3 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
            <FaPlus size={30} />
        </button>
    );
};
