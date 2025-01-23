import React from 'react';
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className='font-sans'>
      <header className='bg-gray-800 text-white p-5 shadow-md text-center'>
        <h1 className='text-3xl'>My Portfolio</h1>
        <nav>
          <ul className='flex justify-center space-x-5'>
            <li><a href='#home' className='hover:text-yellow-400 transition duration-300'>Home</a></li>
            <li><a href='#about' className='hover:text-yellow-400 transition duration-300'>About</a></li>
            <li><a href='#contact' className='hover:text-yellow-400 transition duration-300'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id='home' className='flex flex-col items-center justify-center p-10 bg-gray-100 shadow-lg rounded-lg my-5'>
        <h2 className='text-5xl text-blue-600 mb-5'>Home</h2>
        <img src='https://picsum.photos/200/300' alt='Profile Picture' className='w-44 h-44 rounded-full border-4 border-blue-600 mb-5 transition-transform duration-300 hover:scale-105' />
        <p className='text-lg text-gray-700'>Hello! I'm Uzair Ahmed, a passionate web developer with skills in JavaScript, React, and CSS.</p>
        <h3 className='text-3xl mt-5'>And I'm a <span className='font-bold'>Frontend Developer</span></h3>
        <p className='text-lg text-gray-600 mt-3'>Front-End Developer Responsibilities: Collaborate with designers, optimize applications, develop features, and maintain brand consistency for user-facing interfaces.</p>
      </section>
      <section id='about' className='bg-gradient-to-r from-blue-300 to-green-500 p-10 rounded-lg shadow-lg my-5'>
        <h2 className='text-4xl text-white text-center mb-5'>About</h2>
        <h3 className='text-2xl text-white mb-2'>Professional Background</h3>
        <p className='text-white mb-5'>I graduated with a degree in Computer Science and have worked on various projects ranging from web applications to machine learning models.</p>
        <h3 className='text-2xl text-white mb-2'>Skills</h3>
        <p className='text-white mb-5'>JavaScript, React, Node.js, Python, CSS, HTML.</p>
        <h3 className='text-2xl text-white mb-2'>Interests</h3>
        <p className='text-white mb-5'>I enjoy learning about new technologies, contributing to open-source projects, and exploring UI/UX design.</p>
        <h3 className='text-2xl text-white mb-2'>Goals</h3>
        <p className='text-white'>My goal is to build innovative solutions that improve user experience and efficiency.</p>
      </section>
      <section id='contact' className='p-10 bg-gray-100 shadow-lg rounded-lg my-5'>
        <h2 className='text-4xl text-center mb-5'>Contact</h2>
        <form className='flex flex-col items-center'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-lg mb-1'>Name:</label>
            <input type='text' id='name' name='name' required className='border border-gray-300 rounded p-2 w-full max-w-xs focus:border-blue-500 focus:outline-none' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-lg mb-1'>Email:</label>
            <input type='email' id='email' name='email' required className='border border-gray-300 rounded p-2 w-full max-w-xs focus:border-blue-500 focus:outline-none' />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-lg mb-1'>Message:</label>
            <textarea id='message' name='message' required className='border border-gray-300 rounded p-2 w-full max-w-xs focus:border-blue-500 focus:outline-none'></textarea>
          </div>
          <button type='submit' className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300'>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default function Home() {
  return <Portfolio />;
}
