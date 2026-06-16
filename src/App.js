import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tour, setTour] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          name,
          email,
          tour
        }
      );

      alert(response.data.message);

      const bookingsResponse = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      setBookings(bookingsResponse.data);

      setName("");
      setEmail("");
      setTour("");

    } catch (error) {
      console.error(error);
      alert("Booking failed");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>

      {/* Navigation */}
      <nav
        style={{
          background: "#8B0000",
          color: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            src={logo}
            alt="Nichayavedika Logo"
            width="60"
          />

          <h2 style={{ marginLeft: "10px" }}>
            Nichayavedika Tours
          </h2>
        </div>

        <div>
          Home | Packages | Destinations | Contact
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
          textAlign: "center",
          paddingTop: "150px"
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          Explore Your Dream Destinations
        </h1>

        <p style={{ fontSize: "24px" }}>
          Domestic • International • Pilgrimage Tours
        </p>

        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Book Now
        </button>
      </section>

      {/* Packages */}
      <section style={{ padding: "40px" }}>
        <h2>Popular Packages</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "250px"
            }}
          >
            <h3>Dubai Tour</h3>
            <p>5 Days / 4 Nights</p>
            <p>$899</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "250px"
            }}
          >
            <h3>Kerala Tour</h3>
            <p>4 Days / 3 Nights</p>
            <p>$499</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "250px"
            }}
          >
            <h3>Tirupati Package</h3>
            <p>Temple Special</p>
            <p>$299</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        style={{
          padding: "40px",
          background: "#f8f8f8"
        }}
      >
        <h2>Book Your Tour</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                margin: "10px",
                width: "250px"
              }}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                margin: "10px",
                width: "250px"
              }}
            />
          </div>

          <div>
            <select
              value={tour}
              onChange={(e) => setTour(e.target.value)}
              style={{
                padding: "10px",
                margin: "10px",
                width: "270px"
              }}
            >
              <option value="">Select Tour</option>
              <option>Dubai Tour</option>
              <option>Kerala Tour</option>
              <option>Tirupati Package</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              margin: "10px",
              background: "#8B0000",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit Booking
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section
        style={{
          background: "#eeeeee",
          padding: "40px"
        }}
      >

        <section
          style={{
            padding: "40px",
            background: "#f5f5f5"
          }}
        >
          <h2>Admin Dashboard</h2>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Tour</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.tour}</td>
                  <td>{booking.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <h2>Contact Us</h2>

        <p>Email: info@nichayavedika.com</p>

        <p>Phone: +1 555 123 4567</p>
      </section>

    </div>
  );
}

export default App;

{/* Admin Dashboard */ }

<section style={{ padding: "40px" }}>
  <h2>Admin Dashboard</h2>

  <table border="1" cellPadding="10">
    ...
  </table>
</section>

{/* Contact Section */ }