import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-purple-600 cursor-pointer">
                <button onClick={() => scrollToSection("introduction")}>
                    Smit Solanki
                </button>
            </div>

            <div className="sm:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <nav className="hidden sm:flex space-x-6 text-base sm:text-lg font-montserrat">
                {["skills", "education", "experience", "achievements", "contact"].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="hover:text-purple-600 transition-colors"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md sm:hidden">
                    {["skills", "education", "experience", "achievements", "contact"].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="text-lg hover:text-purple-600 transition-colors"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
