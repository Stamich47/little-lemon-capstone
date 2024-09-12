import { useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
  const location = useLocation();
  const { booking } = location.state || {};

  return (
    <div className="booking-confirmed">
      <h2>Reservation Confirmed!</h2>
      <p>
        Your reservation for <strong>{booking.guests} </strong> on{" "}
        <strong>{booking.date}</strong> at <strong>{booking.time}</strong> has
        been confirmed.
      </p>
      <p>
        A confirmation email has been sent to <strong>{booking.email} </strong>.
        If you need to cancel your reservation, please{" "}
        {booking.textUpdates && "text 'Cancel' to our text update service or "}
        contact us at (123) 456-7890.
      </p>
    </div>
  );
}
