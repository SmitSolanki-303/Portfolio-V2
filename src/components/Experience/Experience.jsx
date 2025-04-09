    import { useState } from "react"
    import ExperienceCard from "./ExperienceCard"

    const ExperienceData = [
        {
            company: "Edunet Foundation",
            position: "Front End Developer",
            startDate: "January 2025",
            endDate: "March 2025",
            description: [
            "Built a ReactJS and TailwindCSS-based portfolio generator for easy, code-free portfolio creation.",
            "Designed a structured input form to collect personal details, education, work experience, skills, and achievements.",
            "Integrated Firebase authentication, storage, and hosting for secure user data and unique portfolio links.",
            ],
        },
        
    ]

    const Experience = () => {
        const [selectedCompany, setSelectedCompany] = useState(0)

        return (
            <section id="experience" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32 bg-gray-50 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-12 text-left">
                Experience<span className="text-purple-600">.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                {/* Company List */}
                <div className="md:w-1/3">
                    <div className="relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-200" />
                    {ExperienceData.map((experience, index) => (
                        <button
                        key={index}
                        onClick={() => setSelectedCompany(index)}
                        className={`relative pl-8 py-4 text-left w-full text-lg font-medium transition-colors duration-200 ${
                            selectedCompany === index
                            ? "text-purple-600"
                            : "text-gray-600  hover:text-purple-600 "
                        }`}
                        >
                        {experience.company}
                        {selectedCompany === index && (
                            <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 " />
                        )}  
                        </button>
                    ))}
                    </div>
                </div>

                {/* Experience Details */}
                <div className="md:w-2/3">
                    <ExperienceCard {...ExperienceData[selectedCompany]} />
                </div>
                </div>
            </div>
            </section>
        )
    }

    export default Experience

