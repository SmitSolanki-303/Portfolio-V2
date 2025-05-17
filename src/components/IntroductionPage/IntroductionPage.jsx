import React from 'react'
import { motion } from 'framer-motion' // Added for modern animations

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/SmitSolanki-303",
        icon: (
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        )
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/smit-solanki-b40741218/",
        icon: (
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
        )
    }
]

const IntroductionPage = () => {
    const onButtonClick = () => {
        const pdfUrl = "src/components/IntroductionPage/Smit_React-Developer.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Smit_React_Developer.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="introduction" className="relative bg-gray-50 w-full min-h-screen overflow-hidden px-4 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-24 flex items-center">
            {/* Background elements for modern effect */}
            {/* <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div> */}

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                {/* Text content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 order-2 lg:order-1"
                >
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
                        Hi all, I'm <span className="text-purple-600">Smit</span>
                    </h1>
                    
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
                        Frontend Developer
                    </h2>
                    
                    <p className="text-base sm:text-lg mb-8 text-gray-600 max-w-lg">
                        A passionate Full Stack Software Developer 🚀 having experience building Web applications 
                        with JavaScript / Reactjs / Framer Motion and other modern libraries and frameworks.
                    </p>

                    <div className="flex gap-6 mb-8">
                        {socialLinks.map((social, index) => (
                            <motion.div 
                                key={index} 
                                className="group relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <svg 
                                        strokeLinejoin="round" 
                                        strokeLinecap="round" 
                                        strokeWidth={2} 
                                        stroke="currentColor" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        className="w-6 sm:w-7 transition-colors duration-200 hover:stroke-purple-600"
                                    >
                                        {social.icon}
                                    </svg>
                                </a>
                                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    {social.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button 
                        onClick={onButtonClick}
                        className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-800 text-white font-medium sm:font-bold shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900 transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg> */}
                        Download Resume
                    </motion.button>
                </motion.div>

                {/* Hero image section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
                >
                    <div className="relative">
                        {/* Modern 3D floating effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl transform rotate-3 scale-105 shadow-lg -z-10"></div>
                        
                        {/* Replace this with your actual hero image */}
                        <div className="relative bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-12 bg-gray-800 flex items-center px-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            
                            <div className="h-64 sm:h-80 mt-12 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                                        S
                                    </div>
                                    <div className="text-lg font-medium">Smit</div>
                                    <div className="text-sm text-gray-500">Frontend Developer</div>
                                </div>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-3 gap-3">
                                <div className="h-8 rounded bg-gray-200"></div>
                                <div className="h-8 rounded bg-purple-200"></div>
                                <div className="h-8 rounded bg-blue-200"></div>
                                <div className="h-8 rounded bg-purple-200"></div>
                                <div className="h-8 rounded bg-blue-200"></div>
                                <div className="h-8 rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default IntroductionPage