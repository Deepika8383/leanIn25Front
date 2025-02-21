import React, { useState } from "react";
import medicines from "../dataBases/medicineDB";
const SearchMedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Please enter a medicine name.");
      setResult(null);
      return;
    }

    const foundMedicine = medicines.find((med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundMedicine) {
      setResult(foundMedicine);
      setError("");
    } else {
      setError("Medicine not found in database.");
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 overflow-auto">
      <h2 className="text-4xl font-bold text-secondary2 mb-20">Search Medicine</h2>

      {/* Search Input */}
      <div className="w-full max-w-md flex gap-2">
        <input
          type="text"
          placeholder="Enter medicine name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-secondary3 text-white font-semibold px-4 py-2 rounded-lg hover:bg-secondary2 hover:shadow-xl transition"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-secondary2 mt-4">{error}</p>}

      {/* Medicine Card */}
      {result && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg max-w-2xl w-full flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <img
            src={result.image}
            alt={result.name}
            className="w-36 h-36 object-cover rounded-md"
          />

          {/* Medicine Details */}
          <div className="text-gray-800 w-full">
            <h3 className="text-2xl font-semibold text-black">{result.name}</h3>
            <p className="text-gray-500">{result.manufacturer}</p>
            <p className="mt-2"><strong>Salt Composition:</strong> {result.salt}</p>
            <p><strong>Price:</strong> {result.price}</p>
            <p><strong>Prescription Required:</strong> {result.prescription ? "Yes" : "No"}</p>

            <div className="mt-2">
              <strong>Uses:</strong>
              <ul className="list-disc ml-6">
                {result.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>

            <div className="mt-2">
              <strong>Side Effects:</strong>
              <ul className="list-disc ml-6 text-secondary2 font-semibold">
                {result.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMedicine;