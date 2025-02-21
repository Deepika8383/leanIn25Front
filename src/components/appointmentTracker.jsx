import { useState } from "react";
import AppointmentScheduler from "./appointmentSchedular";
import { Appointment } from "../models/appointment";

const AppointmentTracker = () => {
    const [isTracker1Open, setIsTracker1Open] = useState(false);
    const [appointments, setAppointments] = useState([]);

    // Function to add medicine
    const addAppointment = (appointmentData) => {
        const newAppointment = new Appointment(
            appointmentData.doctorName,
            appointmentData.date,
            appointmentData.time,
            appointmentData.location
        );
        setAppointments([...appointments, newAppointment]);
    };

    return (
        <div className="m-6 p-4 bg-white shadow-md rounded-lg">
            <div className="flex gap-16 m-6">
                <button 
                    className="bg-secondary3 px-4 py-3 shadow-md rounded-lg text-white font-bold text-lg"
                    onClick={() => setIsTracker1Open(true)} 
                >
                    Add Appointment
                </button>
                <button 
                    className="bg-secondary3 px-4 py-3 shadow-md rounded-lg text-white font-bold text-lg"
                    onClick={() => setIsTracker1Open(false)} 
                >
                    Remove Appointment
                </button>
            </div>

            {/* Display Scheduled Medicines */}
            <h2 className="text-xl font-bold mb-2 text-secondary2">Scheduled Appointments</h2>
            {appointments.length > 0 ? (
                <ul className="list-disc pl-5">
                    {appointments.map((appointment, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-semibold">{appointment.doctorName}</span> - 
                            {appointment.date}, {appointment.time}, {appointment.location}
                            <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No appointments scheduled yet.</p>
            )}

            {/* MedicineScheduler Modal */}
            <AppointmentScheduler isOpen={isTracker1Open} setIsOpen={setIsTracker1Open} addAppointment={addAppointment} />
        </div>
    );
};

export default AppointmentTracker;
