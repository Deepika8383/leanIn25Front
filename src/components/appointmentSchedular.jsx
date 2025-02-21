import React, { useState } from "react";

const AppointmentScheduler = ({ isOpen, setIsOpen, addAppointment }) => {
    const [doctorName, setDoctorName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState([""]);
    const [location, setLocation] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a medicine object
        const newAppointment = {
            doctorName,
            date,
            time,
            location,
        };

        // Add the new medicine to the list
        addAppointment(newAppointment);

        // Reset form fields
        setDoctorName("");
        setDate("");
        setTime([""]);
        setLocation("");

        // Close the modal
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
                    <div className="bg-white max-w-md w-full p-5 border rounded-md shadow-lg overflow-auto max-h-[80vh]">
                        <h2 className="text-xl font-semibold mb-4">Add an Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            {/* dr Name */}
                            <label className="block font-medium mb-1">Name of the doctor:</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md mb-3"
                                placeholder="Enter medicine name"
                                value={doctorName}
                                onChange={(e) => setDoctorName(e.target.value)}
                            />

                            {/* date */}
                            <label className="block font-medium mb-1">date:</label>
                            <input 
                                type="date"
                                value={doctorName}
                                onChange={(e) => setDate(e.target.value)}
                            />

                            <label className="block font-medium">Time:</label>
                                    <input
                                        type="time"
                                        className="w-full border p-2 rounded-md"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />

                            {/* Reason */}
                            <label className="block font-medium mb-1">Location:</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md mb-3"
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />



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

export default AppointmentScheduler;
