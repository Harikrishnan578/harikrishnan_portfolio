import React from 'react';
import firstqa from "../Images/firstqa.jpg"

function Experience_Project() {
    return (
        <>
            <div id="experience" className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Experience</h2>

                <div className="space-y-6">
                    <div className="border-b-2 border-gray-300 pb-4">
                        {/* Job Title, Company Name, and Logo */}
                        <div className="flex items-center mb-4">
                            <img src={firstqa} alt="Company Logo" className="w-20 h-12 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Trainee Analyst Developer</h3>
                                <p className="text-sm text-gray-500">FirstQA Systems K.K. Japan</p>
                            </div>
                        </div>
    
                        <p className="text-sm text-gray-500 mb-2">Social Media Platform - Real-time Audio/Video Communication</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Led development of a social media platform focused on real-time audio and video communication, creating a seamless user experience with{' '}
                                <span className="font-bold text-indigo-500">React.js</span> and <span className="font-bold text-indigo-500">Node.js</span>.
                            </li>
                            <li>
                                Collaborated with cross-functional teams to design and implement scalable front-end and back-end features, ensuring efficient communication between UI and APIs.
                            </li>
                            <li>
                                Utilized modern front-end frameworks like <span className="font-bold text-indigo-500">React.js</span> and{' '}
                                <span className="font-bold text-indigo-500">Tailwind CSS</span> to build responsive, visually appealing interfaces.
                            </li>
                            <li>
                                Managed version control using <span className="font-bold text-indigo-500">Git</span> and <span className="font-bold text-indigo-500">GitHub</span>, ensuring smooth collaboration and code integrity during the development process.
                            </li>
                            <li>
                                Troubleshot and resolved issues in both development and production environments, ensuring minimal downtime and optimizing performance.
                            </li>
                            <li>
                                Engaged in Agile development practices, participating in daily stand-ups, sprint planning, and retrospectives to deliver features on time and ensure continuous improvement.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Project */}
            <Project />
        </>
    );
}

export default Experience_Project;

function Project() {
    return (
        <div id='project' className="bg-gray-50 p-10 rounded-lg shadow-lg max-w-6xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h2>

            <div className="space-y-8">
                {/* Social Media Platform */}
                <div className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-700">Social Media Platform for Real-Time Audio/Video Communication</h3>
                    <p className="text-gray-500 mt-2">
                        Tech Stack: <span className="font-medium text-indigo-600">React.js, Node.js, Tailwind CSS, JavaScript, HTML, CSS</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                        <li>
                            Developed a social media platform enabling users to connect through real-time audio and video based on shared interests.
                        </li>
                        <li>
                            Led the front-end development using <span className="font-semibold text-indigo-600">React.js</span>, creating a user-friendly interface optimized for mobile and desktop platforms.
                        </li>
                        <li>
                            Implemented real-time audio/video communication features, ensuring smooth user interactions.
                        </li>
                        <li>Integrated version control with Git, collaborating with team members through GitHub.</li>
                    </ul>
                </div>

                {/* Responsive E-Commerce Website */}
                <div className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-700">Responsive E-Commerce Website</h3>
                    <p className="text-gray-500 mt-2">Tech Stack: <span className="font-medium text-indigo-600">React.js, Node.js, API</span></p>
                    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                        <li>
                            Built a full-stack e-commerce website with a focus on user experience, responsiveness.
                        </li>
                        <li>
                            Developed a dynamic and responsive front-end using <span className="font-semibold text-indigo-600">React.js</span> and Tailwind CSS for seamless interactions across devices.
                        </li>
                        <li>
                            Integrated <span className="font-semibold text-indigo-600">API</span> for processing, ensuring a smooth experience.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
