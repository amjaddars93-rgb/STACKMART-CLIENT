import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const initialValues = {
    phone: "",
    password: "",
  };

  // redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Invalid phone number") // ✅ better validation
      .required("Phone is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const submitButton = async (values, { setSubmitting, setStatus }) => {
    try {
      console.log("LOGIN VALUES:", values); // 🔥 DEBUG

      const response = await axios.post(
        "http://localhost:5000/user/user-login",
        values,
        { withCredentials: true }
      );

      localStorage.setItem("token", response.data.user.token);

      setStatus({ success: response.data.message });

      navigate("/");
    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data);

      setStatus({
        error: error.response?.data?.message || "Login failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          User Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitButton}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-4">
              {status?.error && (
                <p className="text-red-600 text-center">{status.error}</p>
              )}

              {status?.success && (
                <p className="text-green-600 text-center">
                  {status.success}
                </p>
              )}

              {/* PHONE */}
              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserLogin;