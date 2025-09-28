import React, { useState } from 'react';

const bikes = [
  {
    id: 1,
    brand: 'Honda',
    model: 'CB Shine',
    price: 85000,
    fuel_type: 'Petrol',
    image_url:
      'https://imgd.aeplcdn.com/1280x720/n/cw/ec/45481/shine-right-side-view-13.jpeg?isig=0',
  },
  {
    id: 2,
    brand: 'TVS',
    model: 'Scooty Pep Plus',
    price: 45000,
    fuel_type: 'Petrol',
    image_url:
      'https://imgd.aeplcdn.com/664x374/n/bw/models/colors/tvs-select-model-frosted-black-1669383504324.png?q=80',
  },
  {
    id: 3,
    brand: 'Ather',
    model: '450X',
    price: 140000,
    fuel_type: 'Electric',
    image_url:
      'https://ic4.maxabout.us/autos/tw_india/2025/02/BSA_Goldstar_650_1-20250212073259.jpg',
  },
  {
    id: 4,
    brand: 'Suzuki',
    model: '550X',
    price: 185000,
    fuel_type: 'Electric',
    image_url:
      'https://media.istockphoto.com/id/594474516/photo/suzuki-gsx-r750.jpg?s=612x612&w=0&k=20&c=q49efLmTYHrJUX2_abzD1x4hIzZU35s_VLmEsX-DjPk=',
  },
];

const backgroundStyle = {
  backgroundImage:
    'url(https://thumbs.dreamstime.com/b/minimalist-motorbike-parked-coastal-road-clear-blue-sea-background-digital-362315054.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  backgroundColor: '#fff',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#222',
  padding: '10px 20px',
  color: '#fff',
  borderRadius: '8px',
};

const navContainerStyle = {
  display: 'flex',
  gap: '15px',
};

const navButtonStyle = {
  padding: '8px 16px',
  border: 'none',
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 4,
  cursor: 'pointer',
};



function Home() {
  return <h1>Welcome to Vahan Bazar - Your Two-Wheeler Marketplace!</h1>;
}

function About() {
  return (
    <>
      <h1>About Us</h1>
      <h3>We connect buyers and sellers for two-wheelers across the country.</h3>
    </>
  );
}

function Vehicles({ onSelectBike }) {
  return (
    <>
      <h2>Available Bikes</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
          gap: 20,
          marginTop: 20,
        }}
      >
        {bikes.map((bike) => (
          <div key={bike.id} style={cardStyle}>
            <img
              src={bike.image_url}
              alt={`${bike.brand} ${bike.model}`}
              style={{
                width: '100%',
                height: 150,
                objectFit: 'cover',
                borderRadius: 6,
              }}
            />
            <h3>
              {bike.brand} {bike.model}
            </h3>
            <p>
              <strong>Price:</strong> ₹{bike.price.toLocaleString()}
            </p>
            <p>
              <strong>Fuel Type:</strong> {bike.fuel_type}
            </p>
            <button onClick={() => onSelectBike(bike)}>View Details</button>
          </div>
        ))}
      </div>
    </>
  );
}

function Login() {
  return (
    <div style={{ maxWidth: 400, margin: '0 auto', background: '#fff', padding: 20, borderRadius: 8 }}>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: 10 }}>
          <label>Email:</label>
          <input type="email" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password:</label>
          <input type="password" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <button type="submit" style={{ ...navButtonStyle, width: '100%' }}>Login</button>
      </form>
    </div>
  );
}

function ContactUs() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', background: '#fff', padding: 20, borderRadius: 8 }}>
      <h2>Contact Us</h2>
      <form>
        <div style={{ marginBottom: 10 }}>
          <label>Name:</label>
          <input type="text" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email:</label>
          <input type="email" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Message:</label>
          <textarea style={{ width: '100%', padding: 8, marginTop: 4 }} rows="4" />
        </div>
        <button type="submit" style={{ ...navButtonStyle, width: '100%' }}>Send</button>
      </form>
    </div>
  );
}

// ----------------- App -------------------

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'about' | 'vehicles' | 'login' | 'contact'
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <div style={backgroundStyle}>
      {/* Navbar */}
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>Vahan Bazar</h1>
        <nav style={navContainerStyle}>
          <button style={navButtonStyle} onClick={() => setPage('home')}>Home</button>
          <button style={navButtonStyle} onClick={() => setPage('about')}>About Us</button>
          <button style={navButtonStyle} onClick={() => setPage('vehicles')}>Vehicles</button>
          <button style={navButtonStyle} onClick={() => setPage('login')}>Login</button>
          <button style={navButtonStyle} onClick={() => setPage('contact')}>Contact Us</button>
        </nav>
      </header>

      {/* Page Content */}
      <div style={{ marginTop: 20 }}>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'vehicles' && <Vehicles onSelectBike={setSelectedBike} />}
        {page === 'login' && <Login />}
        {page === 'contact' && <ContactUs />}
      </div>

      {/* Modal */}
      {selectedBike && (
        <div
          onClick={() => setSelectedBike(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 20,
              maxWidth: 500,
              width: '90%',
            }}
          >
            <button onClick={() => setSelectedBike(null)} style={{ float: 'right' }}>
              Close
            </button>
            <h2>
              {selectedBike.brand} {selectedBike.model}
            </h2>
            <img
              src={selectedBike.image_url}
              alt={`${selectedBike.brand} ${selectedBike.model}`}
              style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 6,
              }}
            />
            <p>
              <strong>Price:</strong> ₹{selectedBike.price.toLocaleString()}
            </p>
            <p>
              <strong>Fuel Type:</strong> {selectedBike.fuel_type}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
