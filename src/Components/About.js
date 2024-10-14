import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import resume from "../resume/Harikrishnan.pdf"

function About() {
  return (
    <div id='about' className="bg-[#4a515c] bg-gradient-to-b from-[#4a515c] via-[#2f3640] to-[#23262b] min-h-screen flex flex-col justify-center items-center p-6">
      {/* Main Heading */}
      <h1 className="text-white text-4xl md:text-5xl lg:text-7xl text-center font-extrabold">
        Hi, I'm <span className="text-pink-400">Harikrishnan</span>
      </h1>

      {/* Typing Animation */}
      <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold text-center mt-4">
        I am a{" "}
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            3000,
            "Web Designer",
            3000,
            "React Developer",
            3000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-pink-400"
        />
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg md:text-2xl lg:text-3xl font-light w-full md:w-3/4 lg:w-2/3 text-center mt-8 leading-relaxed">
        I am a skilled <span className="text-pink-400 font-medium">React Developer</span> with a passion for building interactive, user-friendly applications. Always staying up-to-date with the latest frontend technologies, I love collaborating in dynamic teams and thrive in environments where creativity meets technology.
      </p>

      {/* Call-to-Action Button */}
      <div className="mt-10">
      <a
          href={resume} // Path to your resume file in the public folder
          target="_blank"    // Opens the resume in a new tab
          rel="noopener noreferrer" // Provides security for new tab links
          className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg md:text-xl lg:text-2xl shadow-lg hover:bg-pink-600 hover:shadow-2xl transition duration-300"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
