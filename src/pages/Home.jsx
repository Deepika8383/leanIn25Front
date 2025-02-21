import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-auto">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-8 px-10 bg-secondary3 shadow-md"></nav>
      <div className="text-center py-16 mt-12 relative">
        <div className="absolute inset-0 bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg3MC10YW5nLTI4XzEuanBn.jpg')] bg-center opacity-40"></div>
        <div className="relative z-10">
          <h2 className="text-7xl font-bold leading-tight text-secondary2">MediSphere</h2>
          <h3 className="text-2xl mt-3 font-regular leading-tight text-secondary2">Your personal medical ecosystem</h3>
          <p className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto">
            We develop revolutionary technologies, delivering quality healthcare through medical innovation.
          </p>
        </div>
      </div>

      <div className="px-10">
        <h3 className="text-4xl text-center mb-6 text-secondary2 font-bold">Our Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Set a Reminder", img: "🧪" },
            { title: "Search a Medicine", img: "🧬", link: "/search-medicine" },
            { title: "Upload Prescription", img: "🧑‍🔬" },
            { title: "AI - Health Assistant", img: "🤖" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-secondary2 transition cursor-pointer hover:bg-secondary3 hover:opacity-90 hover:text-white hover:shadow-xl"
            >
              <div className="text-5xl">{item.img}</div>
              <h4 className="mt-4 text-xl font-bold">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
};
