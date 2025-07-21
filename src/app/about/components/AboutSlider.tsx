"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const AboutSlider = () => {

    const sliderValue = ["slider", "slider", "slider", "slider", "slider", "slider"]

    const [currentSlderIndex, setCurrentSlderIndex] = useState<number>(0)


    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentSlderIndex((prev) => (prev + 1) % sliderValue.length);
        }, 400);

        return () => clearInterval(interval);

    }, [currentSlderIndex])

    return (
        <div className='w-full h-[90vh] aboutbannerslider'>
            <div className='aboutbannerssliderdiv'>
                <Image
                    alt="BannerImage"
                    src={`/projectImg/project${currentSlderIndex}.png`}
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default AboutSlider












// how to create a auto slider in reactjs


// I'll show you how to create an auto slider (carousel) in ReactJS using functional components, Tailwind CSS for styling, and a simple interval-based auto-slide mechanism. The slider will automatically transition between slides every few seconds and include navigation buttons for manual control.

// index.html
// html
// Edit in files
// •
// Show inline
// This code creates a responsive auto slider with the following features:

// Automatically transitions between slides every 3 seconds.
// Includes navigation buttons for manual control(previous / next).
// Displays dots to indicate the current slide and allow direct navigation.
// Uses Tailwind CSS for styling and layout.
// Supports smooth transitions with CSS animations.
// Cleans up the interval on component unmount to prevent memory leaks.
// To use this slider:

// Copy the code into an HTML file.
// Open it in a browser to see the slider in action.
// You can customize the slides array with your own images, titles, and descriptions.
// Adjust the interval duration(3000ms) in the useEffect hook to change the auto - slide speed.
//     Modify






// 2.6s
// Interrupted
// try again


// I’ll provide a cleaner, more modular approach to creating an auto slider in ReactJS using functional components, Tailwind CSS, and TypeScript for better type safety.This version separates the slider logic into reusable components, includes auto - sliding functionality, manual navigation, and dots for slide selection.I'll focus on the React code, assuming you have a React project set up with Tailwind CSS.

// tsx



// // Slider.tsx
// import React, { useState, useEffect } from 'react';

// interface Slide {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
// }

// const slides: Slide[] = [
//     { id: 1, title: 'Slide 1', description: 'First slide content', image: 'https://via.placeholder.com/800x400?text=Slide+1' },
//     { id: 2, title: 'Slide 2', description: 'Second slide content', image: 'https://via.placeholder.com/800x400?text=Slide+2' },
//     { id: 3, title: 'Slide 3', description: 'Third slide content', image: 'https://via.placeholder.com/800x400?text=Slide+3' },
// ];

// const Slider: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     // Auto-slide every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 3000);

//         return () => clearInterval(interval); // Cleanup
//     }, []);

//     const goToPrevious = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     const goToNext = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     return (
//         <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//             {/* Slides */}
//             <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//                 {slides.map((slide) => (
//                     <div key={slide.id} className="min-w-full">
//                         <img src={slide.image} alt={slide.title} className="w-full h-96 object-cover" />
//                         <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
//                             <h2 className="text-xl font-bold">{slide.title}</h2>
//                             <p>{slide.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Buttons */}
//             <button
//                 onClick={goToPrevious}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//             >
//                 ←
//             </button>
//             <button
//                 onClick={goToNext}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//             >
//                 →
//             </button>

//             {/* Dots */}
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slider;
// tsx



// // App.tsx
// import React from 'react';
// import Slider from './Slider';

// const App: React.FC = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <Slider />
//         </div>
//     );
// };

// export default App;
// Setup Instructions
// Create a React Project: If you don’t have a React project, run:
// bash



// npx create - react - app my - slider--template typescript
// cd my - slider
// npm install tailwindcss postcss autoprefixer
// npx tailwindcss init - p
// Configure Tailwind CSS:
// In tailwind.config.js, add:
// js



// module.exports = {
//     content: ['./src/**/*.{ts,tsx}'],
//     theme: { extend: {} },
//     plugins: [],
// };
// In src / index.css, add:
// css



// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// Add the Slider:
// Create Slider.tsx and App.tsx with the code above.
// Replace the default App.tsx in your project with the provided one.
// Run the App:
// bash



// npm start
// Features
// Auto - Sliding: Transitions every 3 seconds using setInterval.
//     Manual Navigation: Previous/next buttons and clickable dots.
// Responsive Design: Uses Tailwind CSS for responsive, modern styling.
// Type Safety: TypeScript ensures type - safe props and state.
// Smooth Transitions: CSS transitions for slide animations.
//     Cleanup: Clears the interval on component unmount to prevent memory leaks.
//         Customization
// Slides: Modify the slides array to include your images, titles, and descriptions.
//     Timing: Change the 3000 in setInterval to adjust the auto - slide duration.
//         Styling: Update Tailwind classes or add custom CSS in index.css for different layouts or effects.
// Pause on Hover: Add a pause state and onMouseEnter / onMouseLeave events to pause auto - sliding when hovering:
// tsx



// const [isPaused, setIsPaused] = useState(false);
// useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
// }, [isPaused]);
// Add to the container: onMouseEnter = {() => setIsPaused(true)} onMouseLeave = {() => setIsPaused(false)}.
// This approach is modular, reusable, and easy to integrate into any React project.Let me know if you need help with setup or additional features!







// 2.1s

// How can Grok help ?


//     DeepSearch


// Think

// Grok 3


// Code

// Preview




// Loading...