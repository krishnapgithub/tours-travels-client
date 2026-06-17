import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [tour, setTour] = useState("");
  const [destination, setDestination] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const [bookings, setBookings] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tours-travels-server-say1.onrender.com/api/bookings",
        {
          name,
          email,
          destination,
          phone,
          travelDate,
          travelers
        }
      );

      alert(response.data.message);

      const bookingsResponse = await axios.get(
        "https://tours-travels-server-say1.onrender.com/api/bookings"
      );

      setBookings(bookingsResponse.data);

      setName("");
      setEmail("");
      setTour("");
      setPhone("");

      setTravelDate("");
      setTravelers("");

    } catch (error) {
      console.error(error);
      alert("Booking failed");
    }
  };

  useEffect(() => {
    axios
      .get("https://tours-travels-server-say1.onrender.com/api/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (


    <div>
      <h1>NEW VERSION TEST</h1>

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
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Select Destination</option>
              <option value="Dubai Tour">Dubai Tour</option>
              <option value="Kerala Tour">Kerala Tour</option>
              <option value="Tirupati Package">Tirupati Package</option>
            </select>
          </div>

          <div>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Number of Travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              min="1"
              required
            />
          </div>

          <button type="submit">
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
                <th>Phone</th>
                <th>Destination</th>
                <th>Travel Date</th>
                <th>Travelers</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.destination}</td>
                  <td>{booking.travelDate}</td>
                  <td>{booking.travelers}</td>
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