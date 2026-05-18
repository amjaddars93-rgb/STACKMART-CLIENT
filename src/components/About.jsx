import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            ABOUT OUR STACKMART
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Quality products • Trusted service • Happy customers
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a customer-focused e-commerce platform offering
              high-quality products at affordable prices. Our mission
              is to make online shopping easy, fast, and secure.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From electronics and fashion to daily essentials, we
              carefully select products that meet strict quality
              standards to ensure customer satisfaction.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
              alt="About Us"
              className="w-80"
            />
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Quality Products
              </h3>
              <p className="mt-3 text-gray-600">
                We ensure every product meets our quality standards
                before delivery.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-600">
                Quick and reliable shipping to your doorstep.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Customer Support
              </h3>
              <p className="mt-3 text-gray-600">
                Friendly support team available to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              To deliver reliable, affordable, and high-quality products
              while providing excellent customer service.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600">
              To become a trusted online shopping destination loved
              by customers worldwide.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
