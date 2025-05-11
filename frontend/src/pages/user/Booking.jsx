// export default function Booking() {
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold">Book a Pooja or Pandit</h2>
//       <p>Booking functionality will be added here.</p>
//     </div>
//   );
// }

import { useState } from "react";
import { bookPuja } from "../../services/api";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await bookPuja(formData);
      alert("Booking successful: " + res.data.message);
    } catch (err) {
      alert("Failed to book. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Book a Puja</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="service"
          placeholder="Service (e.g., Griha Pravesh)"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
