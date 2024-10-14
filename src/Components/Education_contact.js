import React, { useRef, useState } from 'react';
import kongu_logo from "../Images/kongu.png";
import emailjs from '@emailjs/browser';

function Education_contact() {
    return (
        <div>
            <div id='education' className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Education</h2>

                <div className="flex items-center space-x-6 transform hover:scale-105 transition-transform duration-300">
                    {/* College Logo */}
                    <div className="w-24 h-24">
                        <img
                            src={kongu_logo}
                            alt="Kongu Engineering College Logo"
                            className="w-full h-full object-contain rounded-full shadow-lg"
                        />
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-700">M.Sc in Software Systems</h3>
                        <p className="text-gray-500">Kongu Engineering College, Erode, Tamil Nadu, India</p>
                        <p className="text-gray-400 italic">May 2017 – April 2022</p>
                        <div className="mt-4">
                            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-2 rounded-lg">
                                GPA: 7.45
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <Contact />
        </div>
    )
}

export default Education_contact;

function Contact() {
    const form = useRef();
    const [alert, setAlert] = useState(null); // State for alert message

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm('service_a4euhiu', 'template_1glj03k', form.current, {
                publicKey: '0aT7FuuAABgVS9rvh',
            })
            .then(
                () => {
                    // Show success alert
                    setAlert({ type: 'success', message: 'Message sent successfully!' });
                    form.current.reset(); // Clear form
                },
                (error) => {
                    // Show failure alert
                    setAlert({ type: 'error', message: 'Failed to send message. Please try again.' });
                }
            );

        // Hide alert after 3 seconds
        setTimeout(() => setAlert(null), 4000);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-xl shadow-2xl max-w-lg mx-auto my-10">
                <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>

                {/* Alert Box */}
                {alert && (
                    <div
                        className={`p-4 mb-4 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${
                            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    >
                        {alert.message}
                    </div>
                )}

                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                    {/* Name Field */}
                    <div className="relative">
                        <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            className="w-full mt-1 p-3 rounded-md bg-white bg-opacity-20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                        <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name='subject'
                            className="w-full mt-1 p-3 rounded-md bg-white bg-opacity-20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            name='message'
                            className="w-full mt-1 p-3 rounded-md bg-white bg-opacity-20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
