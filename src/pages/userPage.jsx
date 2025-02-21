import { useState } from "react";
import { CustomCalendar } from "../components/calender";
import MedicineTracker from "../components/medicineTracker";
import AppointmentTracker from "../components/appointmentTracker"; // Import Appointment Tracker
import { Link } from "react-router-dom";

export const UserPage = () => {
    const [activeSection, setActiveSection] = useState("medicine"); // Track active section

    return (
        <div className="h-screen w-full flex overflow-auto bg-gray-100">
            {/* Profile Section */}
            <div className="w-[15%] h-full bg-secondary3 m-1.5 rounded-lg">
                <h2 className="text-xl font-bold text-white p-4">Profile</h2>
                <div className="flex flex-col gap-y-6 py-10 px-3 text-left text-white font-semibold">
                    <button onClick={() => setActiveSection("appointments")} className="text-left hover:underline">
                        Track Appointments
                    </button>
                    <button onClick={() => setActiveSection("medicine")} className="text-left hover:underline">
                        Medicine Tracker
                    </button>
                    <Link>Auto Order</Link>
                    <Link>Search a Medicine</Link>
                    <Link>Customized AI-based Suggestions</Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-[85%] h-screen">
                {/* Calendar Section */}
                <div className="m-1.5 ml-0 rounded-lg">
                    <CustomCalendar />
                </div>

                {/* Render the selected section */}
                {activeSection === "medicine" ? <MedicineTracker /> : <AppointmentTracker />}
            </div>
        </div>
    );
};
