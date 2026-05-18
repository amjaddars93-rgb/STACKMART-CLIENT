import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contactus = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phonenumber: "",
    },

    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      phonenumber: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Phone number is not valid")
        .required("Phone number is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting, setStatus }) => {
      try {
        const res = await axios.post(
       "http://localhost:5000/contact/infor-contact",
          values
        );

        setStatus({ success: res.data.message });
        resetForm();
      } catch (error) {
        setStatus({
          error:
            error.response?.data?.message || "Something went wrong",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Contact Us
        </h2>

        {/* Success / Error Message */}
        {formik.status?.success && (
          <p className="text-center mb-4 text-green-600 font-medium">
            {formik.status.success}
          </p>
        )}

        {formik.status?.error && (
          <p className="text-center mb-4 text-red-600 font-medium">
            {formik.status.error}
          </p>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              {...formik.getFieldProps("fullname")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.fullname}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phonenumber"
              {...formik.getFieldProps("phonenumber")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.phonenumber &&
              formik.errors.phonenumber && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.phonenumber}
                </p>
              )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {formik.isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
