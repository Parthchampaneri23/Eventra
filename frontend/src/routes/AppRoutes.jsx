import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import Events from "../pages/Events";
import Talent from "../pages/Talent";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

// Authentication
import Login from "../pages/Login";
import Register from "../pages/Register";

// Dashboards
import ClientDashboard from "../components/dashboards/ClientDashboard";
import TalentDashboard from "../components/dashboards/TalentDashboard";
import AdminDashboard from "../components/dashboards/AdminDashboard";

// Dashboard Pages
import ClientProfile from "../components/dashboards/ClientProfile";
import TalentProfile from "../components/dashboards/TalentProfile";
import AdminProfile from "../components/dashboards/AdminProfile";

import ClientRequests from "../components/dashboards/ClientRequests";
import TalentApplications from "../components/dashboards/TalentApplications";
import ManageUsers from "../components/dashboards/ManageUsers";
import AdminRequests from "../components/dashboards/AdminRequests";
import ManageEvents from "../components/dashboards/ManageEvents";
import ViewReports from "../components/dashboards/ViewReports";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Footer Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route
          path="/client-dashboard"
          element={<ClientDashboard />}
        />

        <Route
          path="/talent-dashboard"
          element={<TalentDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Client */}
        <Route
          path="/client-profile"
          element={<ClientProfile />}
        />

        <Route
          path="/client-requests"
          element={<ClientRequests />}
        />

        {/* Talent */}
        <Route
          path="/talent-profile"
          element={<TalentProfile />}
        />

        <Route
          path="/talent-applications"
          element={<TalentApplications />}
        />

        {/* Admin */}
        <Route
          path="/admin-profile"
          element={<AdminProfile />}
        />

        <Route
          path="/manage-users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin-requests"
          element={<AdminRequests />}
        />

        <Route
          path="/manage-events"
          element={<ManageEvents />}
        />

        <Route
          path="/view-reports"
          element={<ViewReports />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;