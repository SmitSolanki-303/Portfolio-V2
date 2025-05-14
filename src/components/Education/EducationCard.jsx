import { motion } from "framer-motion";

const EducationCard = ({
    universityName,
    courseName,
    courseStart,
    courseEnd,
    achievements = [],
    isLeft,
}) => {
    return (
        <motion.div
            className="mb-12 flex flex-col sm:flex-row items-center sm:justify-between w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: isLeft ? 0 : 0.2 }}
        >
            {/* Spacer for alignment on large screens */}
            <div className="hidden sm:block w-5/12"></div>

            {/* Timeline Dot */}
            <div className="z-20 flex items-center justify-center bg-purple-400 shadow-xl w-8 h-8 rounded-full sm:order-none order-1 mb-4 sm:mb-0">
                <span className="text-white text-lg">🎓</span>
            </div>

            {/* Card */}
            <motion.div
                className={`bg-white rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 ${isLeft ? "sm:order-none order-1" : "sm:order-1 order-1"
                    }`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <h3 className="mb-2 font-bold text-purple-600 text-lg sm:text-xl">
                    {universityName}
                </h3>
                <h4 className="mb-2 font-semibold text-gray-800 text-base sm:text-lg">
                    {courseName}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                    {courseStart} - {courseEnd}
                </p>
                {achievements.length > 0 && (
                    <ul className="list-disc text-sm text-gray-600 pl-4">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </motion.div>
    );
};

export default EducationCard;
