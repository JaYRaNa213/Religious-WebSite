// src/pages/PujaBooking.jsx
import React, { useState } from "react";

const PujaBooking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedPandit, setSelectedPandit] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingData = { date, time, pandit: selectedPandit };

    fetch("http://localhost:7000/api/v1/puja/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => alert("Puja booked successfully"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <select
        value={selectedPandit}
        onChange={(e) => setSelectedPandit(e.target.value)}
      >
        <option value="">Select Pandit</option>
        <option value="pandit1">Pandit 1</option>
        <option value="pandit2">Pandit 2</option>
      </select>
      <button type="submit">Book Puja</button>
    </form>
  );
};

export default PujaBooking;
