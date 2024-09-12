import { useState, useReducer } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function BookingForm({
  availableTimes,
  updateTimes,
  setSelectedDate,
  selectedDate,
  submitForm,
}) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    textUpdates: false,
    requests: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDayClick = (date) => {
    if (!date) return;
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setSelectedDate(date);
    updateTimes(date);
    setFormData({ ...formData, date: formattedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="booking-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="day-picker-container">
          <DayPicker
            name="date"
            mode="single"
            selected={selectedDate}
            onDayClick={handleDayClick}
          />
        </div>
        <div className="form-input">
          <div className="form-time">
            <label htmlFor="time">Select Reservation Time</label>
            {selectedDate ? (
              <select
                name="time"
                id="time"
                onChange={handleInputChange}
                required
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            ) : (
              <select name="time" id="time" disabled>
                <option value="">Please select a date...</option>
              </select>
            )}
          </div>
          <div className="form-guests">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="8"
              placeholder="2"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact-info">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="phone">
              Phone <span>(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleInputChange}
            />
            <div className="text-updates">
              <input
                type="checkbox"
                id="textUpdates"
                name="textUpdates"
                checked={formData.textUpdates}
                onChange={handleInputChange}
              />
              <label htmlFor="textUpdates">
                Receive text updates about your reservation
              </label>
            </div>
            <div className="other-text">
              <label htmlFor="requests">
                Allergies or dietary restrictions? Let us know here!
              </label>
              <textarea
                onChange={handleInputChange}
                id="requests"
                name="requests"
                rows="4"
              ></textarea>
            </div>
          </div>
          <button>Confirm Reservation</button>
        </div>
      </form>
    </div>
  );
}
