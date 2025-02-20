import { useState } from "react";
import { CustomCalendar } from "../components/calender";
import MedicineScheduler from "../components/medicineTracker"; 

export const UserPage = () => {
    const [isTrackerOpen, setIsTrackerOpen] = useState(false);
    const [medicines, setMedicines] = useState([]); // Store added medicines

    // Function to add medicine to the array
    const addMedicine = (newMedicine) => {
        setMedicines([...medicines, newMedicine]);
    };

    return (
        <div className="h-screen w-full flex overflow-auto bg-gray-100">
            {/* Profile Section */}
            <div className="w-[15%] h-full bg-secondary3 m-1.5 rounded-lg">
                <h2 className="text-xl font-bold text-white p-4">Profile</h2>
            </div>

            <div className="w-[85%] h-screen">
                {/* Calendar Section */}
                <div className="m-1.5 ml-0 rounded-lg">
                    <CustomCalendar />
                </div>

                {/* Buttons Section */}
                <div className="flex gap-16 m-6">
                    <button 
                        className="bg-secondary3 px-4 py-3 shadow-md rounded-lg text-white font-bold text-lg"
                        onClick={() => setIsTrackerOpen(true)} // Open MedicineScheduler
                    >
                        Add Medicine
                    </button>
                </div>

                {/* Display Added Medicines */}
                <div className="m-6 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Scheduled Medicines</h2>
                    {medicines.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {medicines.map((medicine, index) => (
                                <li key={index} className="mb-2">
                                    <span className="font-semibold">{medicine.medicineName}</span> - 
                                    {medicine.medicineForm}, {medicine.frequency}, {medicine.timesPerDay} times a day
                                    <br />
                                    <span className="text-sm text-gray-600">Timings: {medicine.times.join(", ")}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No medicines scheduled yet.</p>
                    )}
                </div>
            </div>

            {/* MedicineScheduler Modal */}
            <MedicineScheduler isOpen={isTrackerOpen} setIsOpen={setIsTrackerOpen} addMedicine={addMedicine} />
        </div>
    );
};
