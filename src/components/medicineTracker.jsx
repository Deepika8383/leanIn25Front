import React, { useState } from "react";

const MedicineScheduler = ({ isOpen, setIsOpen, addMedicine }) => {
    const [medicineName, setMedicineName] = useState("");
    const [medicineForm, setMedicineForm] = useState("Pill");
    const [reason, setReason] = useState("");
    const [frequency, setFrequency] = useState("Every day");
    const [timesPerDay, setTimesPerDay] = useState(1);
    const [times, setTimes] = useState([""]);

    // Handle times per day change
    const handleTimesPerDayChange = (value) => {
        const numDoses = parseInt(value) || 1;
        setTimesPerDay(numDoses);
        setTimes(Array.from({ length: numDoses }, () => ""));
    };

    // Handle time input change
    const handleTimeChange = (index, value) => {
        const updatedTimes = [...times];
        updatedTimes[index] = value;
        setTimes(updatedTimes);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a medicine object
        const newMedicine = {
            medicineName,
            medicineForm,
            reason,
            frequency,
            timesPerDay,
            times,
        };

        // Add the new medicine to the list
        addMedicine(newMedicine);

        // Reset form fields
        setMedicineName("");
        setMedicineForm("Pill");
        setReason("");
        setFrequency("Every day");
        setTimesPerDay(1);
        setTimes([""]);

        // Close the modal
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
                    <div className="bg-white max-w-md w-full p-5 border rounded-md shadow-lg overflow-auto max-h-[80vh]">
                        <h2 className="text-xl font-semibold mb-4">Add a Medicine</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Medicine Name */}
                            <label className="block font-medium mb-1">Medicine Name:</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md mb-3"
                                placeholder="Enter medicine name"
                                value={medicineName}
                                onChange={(e) => setMedicineName(e.target.value)}
                                required
                            />

                            {/* Medicine Form */}
                            <label className="block font-medium mb-1">Form of Medicine:</label>
                            <select
                                className="w-full border p-2 rounded-md mb-3"
                                value={medicineForm}
                                onChange={(e) => setMedicineForm(e.target.value)}
                            >
                                <option value="Injection">Injection</option>
                                <option value="Pill">Pill</option>
                                <option value="Solution">Solution</option>
                                <option value="Drops">Drops</option>
                                <option value="Powder">Powder</option>
                                <option value="Inhaler">Inhaler</option>
                            </select>

                            {/* Reason */}
                            <label className="block font-medium mb-1">Reason for Taking:</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md mb-3"
                                placeholder="Enter reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                            />

                            {/* Frequency */}
                            <label className="block font-medium mb-1">Frequency:</label>
                            <select
                                className="w-full border p-2 rounded-md mb-3"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                            >
                                <option value="Every day">Every day</option>
                                <option value="Every other day">Every other day</option>
                                <option value="Specific days">Specific days</option>
                                <option value="Recurring cycle">On a recurring cycle</option>
                                <option value="Every X days">Every X days</option>
                                <option value="Every X weeks">Every X weeks</option>
                                <option value="Every X months">Every X months</option>
                                <option value="As needed">Only as needed</option>
                            </select>

                            {/* Times Per Day */}
                            <label className="block font-medium mb-1">Times Per Day:</label>
                            <select
                                className="w-full border p-2 rounded-md mb-3"
                                value={timesPerDay}
                                onChange={(e) => handleTimesPerDayChange(e.target.value)}
                            >
                                <option value="1">Once a day</option>
                                <option value="2">Twice a day</option>
                                <option value="3">Thrice a day</option>
                            </select>

                            {/* Dosage Times */}
                            {times.map((time, index) => (
                                <div key={index} className="mb-3">
                                    <label className="block font-medium">Time {index + 1}:</label>
                                    <input
                                        type="time"
                                        className="w-full border p-2 rounded-md"
                                        value={time}
                                        onChange={(e) => handleTimeChange(index, e.target.value)}
                                        required
                                    />
                                </div>
                            ))}

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-secondary3 text-white font-bold shadow-lg py-4 rounded-md hover:bg-green1bg hover:text-secondary3">
                                Add Medicine
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicineScheduler;
