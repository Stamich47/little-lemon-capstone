import BookingHero from "./BookingHero";
import BookingForm from "./BookingForm";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const submitForm = (data) => {
    const result = submitAPI(data);
    if (result) {
      navigate("/book/confirmed", { state: { booking: data } });
    }

    console.log(result);
  };

  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  };

  const reducer = (state, action) => {
    if (action.type === "update_times") {
      return action.times;
    } else {
      return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  const updateTimes = (date) => {
    if (!date) return;
    const times = fetchAPI(date);
    dispatch({ type: "update_times", times });
  };

  useEffect(() => {
    updateTimes(selectedDate);
  }, [selectedDate]);

  return (
    <div className="booking">
      <BookingHero />
      <Routes>
        <Route
          path="/*"
          element={
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}
