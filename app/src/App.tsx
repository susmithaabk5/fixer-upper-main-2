import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Header from "./components/Header";
import BookingsList from "./pages/BookingsList";
import CreateBooking from "./pages/CreateBooking";
import "./assets/styles/_app.scss";

export default function App() {
  return (
    <div className="container">
      <Header title="Welcome to Fixer-Upper Bookings" />
      <Routes>
        <Route path="/list" element={<BookingsList />} />
        <Route path="/add" element={<CreateBooking />} />
        <Route path="/*" element={<Navigate to="/list" />} />
      </Routes>
    </div>
  );
}
