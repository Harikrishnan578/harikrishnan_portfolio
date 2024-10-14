import React from 'react'
import html_logo from "../Images/HTML-5-Badge-Logo.png"
import css_logo from "../Images/CSS-logo.png"
import js_logo from "../Images/javascript-logo.png"
import react from "../Images/reactjs.png"
import tailwind from "../Images/tailwindcss.png"
import redux from "../Images/redux.png"
import vscode from "../Images/vscode.jpg"
import git from "../Images/git.png"
import github from "../Images/github.jpg"

function Skills() {

  return (
    <div id='skills' className="bg-gradient-to-b from-[#23262b] to-[#2f3640] min-h-screen flex flex-col justify-center items-center p-10">
      {/* Heading */}
      <h1 className="text-pink-400 text-4xl md:text-5xl font-extrabold text-center">Skills</h1>
      <p className="text-gray-300 text-xl md:text-2xl font-light text-center mt-4">
        Here are some technologies and tools I’ve mastered.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10">
        {/* Skill Item */}
        {[
          { name: 'HTML', logo: html_logo },
          { name: 'CSS', logo: css_logo },
          { name: 'JavaScript', logo: js_logo },
          { name: 'React', logo: react },
          { name: 'Tailwind CSS', logo: tailwind },
          { name: 'Redux', logo: redux },
          { name: 'VS Code', logo: vscode },
          { name: 'Git', logo: git },
          { name: 'GitHub', logo: github },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-[#3a3f45] rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:bg-[#434a52] cursor-pointer"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
            <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
