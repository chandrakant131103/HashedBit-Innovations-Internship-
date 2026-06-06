import { useLocation, Link } from "react-router-dom";

function BookingSuccess() {
  const location = useLocation();

  const booking = location.state;

  if (!booking) {
    return (
      <div className="success">
        <h2>No Booking Found</h2>

        <Link to="/">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="success">
      <h2>
        Seat Booked Successfully 🎉
      </h2>

      <p>
        <strong>Booking ID:</strong>
        {" "}
        {booking.bookingId}
      </p>

      <p>
        <strong>Name:</strong>
        {" "}
        {booking.name}
      </p>

      <p>
        <strong>Email:</strong>
        {" "}
        {booking.email}
      </p>

      <p>
        <strong>Mobile:</strong>
        {" "}
        {booking.mobile}
      </p>

      <br />

      <Link to="/">
        <button>
          Back To Movies
        </button>
      </Link>
    </div>
  );
}

export default BookingSuccess;