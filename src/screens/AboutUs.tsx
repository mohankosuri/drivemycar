import React from 'react'
import CarBooking from '../components/Carbooking'

const AboutUs = () => {
  return (
    <div>
       <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Drive My Cars</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your one-stop solution for renting, buying, and experiencing the best cars. We bring a seamless
                        and transparent process to ensure you find the car that suits your needs and budget.
                    </p>
                </div>

                {/* Our Mission Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At Drive My Cars, we believe that everyone deserves access to high-quality vehicles, whether you
                        are looking to rent for a short trip or buy your dream car. Our mission is to make this process
                        as easy and enjoyable as possible, with a focus on customer satisfaction and transparency.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Wide Selection of Cars</h3>
                        <p className="text-gray-600">
                            From luxury sedans to rugged SUVs, we have a diverse range of vehicles to choose from, catering to all your needs.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Transparent Pricing</h3>
                        <p className="text-gray-600">
                            No hidden fees or surprises. We provide clear and upfront pricing for all our vehicles.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Quality Assurance</h3>
                        <p className="text-gray-600">
                            All our vehicles undergo a strict quality check to ensure you get the best driving experience, every time.
                        </p>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-md w-full sm:w-1/3">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Integrity</h3>
                            <p className="text-gray-600">
                                We believe in being honest and transparent with our customers, providing accurate information at all times.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md w-full sm:w-1/3">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Customer First</h3>
                            <p className="text-gray-600">
                                Our customers are at the heart of everything we do. We strive to provide an exceptional experience every time.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md w-full sm:w-1/3">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We are always looking for ways to innovate and improve our services to better serve our customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have any questions or need assistance? Our team is here to help you. Reach out to us anytime and we will get back to you as soon as possible.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs