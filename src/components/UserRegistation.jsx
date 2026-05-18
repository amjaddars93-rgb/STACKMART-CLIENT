import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const navigate = useNavigate()
  // const[registereror,setRegistereror]=useState('')
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    role:'',
  });

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)

    if (token) {
      navigate("/")
    }
    //  setIsLoggedIn(true)
  }, [])

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
     const res = await axios.post(
  "http://localhost:5000/user/user-register",
  formData,
  { withCredentials: true }
);
      setMessage(res.data.message);

      setFormData({
        fullname: "",
        phone: "",
        email: "",
        password: "",
        role:'',
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed"

      );
    } finally {
      setLoading(false);
    }
  };

  const userLoginbutton = () => {
    navigate('/userLogin')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          User Registration
        </h2>

        {message && (
          <p className="text-center mb-4 text-green-600 font-medium">
            {message}
          </p>
        )}

<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    name="fullname"
    placeholder="Full Name"
    value={formData.fullname}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  {/* Fixed Role Select */}
  <select
    name="role"                     // 👈 must match formData key
    value={formData.role}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  >
    <option value="">Select Role</option>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
  >
    {loading ? "Registering..." : "Register"}
  </button>
</form>

        <button onClick={userLoginbutton} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition mt-6" >Aleardy Login ? </button>
      </div>
    </div>
  );
};

export default UserRegistration;
