import EducationCard from "./EducationCard";

const educationQualifications = [
    {
        universityName: "Sarvajanik University",
        courseName: "Bachelor's of Technology in Computer Engineering",
        courseStart: "August 2022",
        courseEnd: "June 2025",
        achievements: [],
    },
    {
        universityName: "Gujarat Technological University",
        courseName: "Diploma in Computer Engineering",
        courseStart: "August 2019",
        courseEnd: "June 2022",
        achievements: [],
    },
    {
        universityName: "Gujarat Board",
        courseName: "SSC",
        courseStart: "August 2018",
        courseEnd: "June 2019",
        achievements: [],
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="w-full px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32 bg-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-left">
                    Education Qualifications<span className="text-purple-600">.</span>
                </h2>

                <div className="relative">
                    <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
                    {educationQualifications.map((education, index) => (
                        <EducationCard key={index} {...education} isLeft={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
