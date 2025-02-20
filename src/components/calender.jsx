import React, { useState } from "react";
import { format, addDays, subDays, startOfWeek } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Get the start of the week (Sunday as first day)
    const startDate = startOfWeek(selectedDate, { weekStartsOn: 0 });

    // Generate the week days dynamically
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

    return (
        <div className="flex flex-col items-center bg-secondary3 bg-opacity-90 text-white rounded-lg shadow-md w-[100%] h-36">
            {/* Navigation */}
            <div className="flex items-center justify-between w-full">
                <button 
                    onClick={() => setSelectedDate(subDays(selectedDate, 7))}
                    className="rounded-full hover:bg-black"
                >
                    <FaChevronLeft />
                </button>
                <h2 className="text-xl font-semibold mb-2">{format(selectedDate, "MMMM yyyy")}</h2>
                <button 
                    onClick={() => setSelectedDate(addDays(selectedDate, 7))}
                    className="rounded-full hover:bg-black"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Days of the Week */}
            <div className="flex justify-between w-full text-white font-semibold">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <span key={i} className="flex-1 text-center">{day}</span>
                ))}
            </div>

            {/* Dates */}
            <div className="flex justify-between w-full px-10">
                {weekDays.map((day, i) => {
                    const isSelected = format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                    
                    return (
                        <button
                            key={i}
                            className={`flex flex-col items-center p-2 rounded-full w-10 h-10
                                ${isSelected ? "bg-green1bg text-secondary3" : "text-white hover:bg-gray-700"}
                            `}
                            onClick={() => setSelectedDate(day)}
                        >
                            {format(day, "d")}
                        </button>
                    );
                })}
            </div>

            {/* Selected Date */}
            <p className="mt-3 text-lg text-white font-bold">Today, {format(selectedDate, "EEEE, MMM d")}</p>
        </div>
    );
};
