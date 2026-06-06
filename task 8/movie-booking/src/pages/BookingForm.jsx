import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingId =
      "BK" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    navigate("/success", {
      state: {
        bookingId,
        movieId: id,
        ...formData,
      },
    });
  };

  return (
    <div className="form-container">
      <h2>Book Your Seat</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          required
          onChange={handleChange}
        />

        <button type="submit">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;