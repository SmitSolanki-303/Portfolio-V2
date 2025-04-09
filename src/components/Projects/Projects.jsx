import ProjectCard from "./ProjectCard"
import Image1 from './Image1.jpg';

const projects = [
    {
    title: "GlobalGrad",
    description: "A Software Developer Portfolio designed to showcase your skills, projects, achievements, and education, helping you highlight your expertise effectively.",
    image: Image1,
    link: "https://github.com/SmitSolanki-303/GlobalGrad.git",
    tags: ["React", "Tailwind CSS", "Firebase"],
    },
    {
    title: "Portfolio",
    description: "Modern Portfolio for developer that showcase the skills, projects, educations, and achievements.",
    image: Image1,
    link: "https://github.com/SmitSolanki-303/Portfolio-V2.git",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
    title: "BoothBiz",
    description: "BoothBiz is a web platform designed to help stall owners and vendors efficiently manage their stalls, streamline sales with an integrated POS system, and gain valuable business insights through advanced sales analytics.",
    image: Image1,
    link: "https://github.com/SmitSolanki-303/Booth-Bizz.git",
    tags: ["React", "TailwindCSS", "Firebase"],
    },
    {
        title: "INDRA Forecast",
        description: "A weather application that provides real-time weather updates, including temperature, humidity, wind speed, UV index, visibility, and cloud conditions, by simply entering a city name.",
        image: Image1,
        link: "https://github.com/SmitSolanki-303/Indra-Forecast.git",
        tags: ["React", "CSS", "API"],
        },
]


const Projects = () => {


    return (
        <section id="projects" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-semibold  text-3xl sm:text-4xl md:text-5xl mb-12 text-left">
                My Projects<span className="text-purple-600">.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-left text-gray-600 ">
            Here are some of my recent works:
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Projects

