// Local dataset (create a medicines.json file in your src folder)
const medicines = [
    {
      id: 1,
      name: "Dolo 650",
      salt: "Paracetamol (650mg)",
      uses: ["Fever", "Pain relief"],
      sideEffects: ["Nausea (rare)", "Liver damage in overdose"],
      price: "₹30",
      manufacturer: "Micro Labs Ltd",
      prescription: false,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/12/369247058/BS/ZD/LQ/101727781/dolo-650-paracetamol-tablets.jpeg",
    },
    {
      id: 2,
      name: "Azithral 500",
      salt: "Azithromycin (500mg)",
      uses: ["Bacterial infections", "Pneumonia"],
      sideEffects: ["Stomach upset", "Diarrhea"],
      price: "₹150",
      manufacturer: "Alembic Pharmaceuticals",
      prescription: true,
      image: "/images/azithral-500.jpg",
    },
    {
      id: 3,
      name: "Pan 40",
      salt: "Pantoprazole (40mg)",
      uses: ["Acidity", "GERD"],
      sideEffects: ["Headache", "Diarrhea"],
      price: "₹120",
      manufacturer: "Alkem Laboratories",
      prescription: false,
      image: "/images/pan-40.jpg",
    },
  ];
  
  export default medicines;
  