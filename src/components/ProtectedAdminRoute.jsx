import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      try {
       const res = await axios.get(
  "http://localhost:5000/user/user-role",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  }
);
        setRole(res.data.role);
      } catch (error) {
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getUserRole();
    } else {
      setLoading(false);
    }
  }, [token]);

  // ⏳ While checking role
  if (loading) {
    return <h3>Checking permissions...</h3>;
  }

  // ❌ Not admin or no token
  if (!token || role !== "admin") {
    return <Navigate to="/userLogin" replace />;
  }

  // ✅ Admin allowed
  return children;
};

export default ProtectedAdminRoute;
