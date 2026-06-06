import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingSuccess from "./pages/BookingSuccess";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header>
          <h1> Movie Booking System</h1>
        </header>

        <Routes>
          <Route path="/" element={<MovieList />} />

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          <Route
            path="/book/:id"
            element={<BookingForm />}
          />

          <Route
            path="/success"
            element={<BookingSuccess />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;