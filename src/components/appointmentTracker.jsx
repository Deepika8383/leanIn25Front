import { useState } from "react";
import MedicineScheduler from "./medicineSchedular";
import { Medicine } from "../models/medicine";

const AppointmentTracker = () => {
    const [isTrackerOpen, setIsTrackerOpen] = useState(false);
    const [medicines, setMedicines] = useState([]);

    // Function to add medicine
    const addMedicine = (medicineData) => {
        const newMedicine = new Medicine(
            medicineData.medicineName,
            medicineData.medicineForm,
            medicineData.frequency,
            medicineData.timesPerDay,
            medicineData.times
        );
        setMedicines([...medicines, newMedicine]);
    };

    return (
        <div className="m-6 p-4 bg-white shadow-md rounded-lg">
            <div className="flex gap-16 m-6">
                <button 
                    className="bg-secondary3 px-4 py-3 shadow-md rounded-lg text-white font-bold text-lg"
                    onClick={() => setIsTrackerOpen(true)} 
                >
                    Add Appointment
                </button>
                <button 
                    className="bg-secondary3 px-4 py-3 shadow-md rounded-lg text-white font-bold text-lg"
                    onClick={() => setIsTrackerOpen(true)} 
                >
                    Remove Appointment
                </button>
            </div>

            {/* Display Scheduled Medicines */}
            <h2 className="text-xl font-bold mb-2 text-secondary2">Scheduled Appointments</h2>
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
                <p className="text-gray-500">No appointments scheduled yet.</p>
            )}

            {/* MedicineScheduler Modal */}
            <MedicineScheduler isOpen={isTrackerOpen} setIsOpen={setIsTrackerOpen} addMedicine={addMedicine} />
        </div>
    );
};

export default AppointmentTracker;
