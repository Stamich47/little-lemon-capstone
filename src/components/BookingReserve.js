import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function BookingReserve() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const reservationTimes = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  return (
    <div className="booking-form">
      <div className="day-picker-container">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onDayClick={setSelectedDate}
        />
      </div>

      <form className="form-input" onSubmit={(e) => e.preventDefault()}>
        <div className="form-time">
          <label htmlFor="time">Select Reservation Time</label>
          <select id="time" required>
            {reservationTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-guests">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="8"
            required
          />
        </div>

        <div className="contact-info">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">
            Phone <span>(optional)</span>
          </label>
          <input type="tel" id="phone" name="phone" />
          <div className="text-updates">
            <input type="checkbox" id="textUpdates" name="textUpdates" />
            <label htmlFor="textUpdates">
              Receive text updates about your reservation
            </label>
          </div>
          <div className="other-text">
            <label htmlFor="requests">
              Allergies or dietary restrictions? Let us know here!
            </label>
            <textarea id="requests" name="requests" rows="4"></textarea>
          </div>
        </div>

        <button>Confirm Reservation</button>
      </form>
    </div>
  );
}
