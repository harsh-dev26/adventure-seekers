// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FamilyTrips from "./Pages/FamilyTrips";
import MysteryTrips from "./Pages/MysteryTrips";
import GroupTrips from "./Pages/GroupTrips";
import Contact from "./Pages/contact";   // ✅ now real page

function App() {
  return (
    <Router>
      <Routes>
        {/* Working Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/family-trips" element={<FamilyTrips />} />
        <Route path="/mystery-trips" element={<MysteryTrips />} />
        <Route path="/group-trips" element={<GroupTrips />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
