// src/components/Experience.jsx
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
    const experiences = [
        {
            title: "Junior Software Developer",
            company: "RBrickks Technology",
            location: "Pune",
            period: "Oct 2025 – April 2026",
            type: "Full-Time",
            current: false,
            responsibilities: [
                "Worked as a Full-Stack Developer handling frontend, backend, and database development",
                "Built responsive UIs using React.js, HTML, CSS, and designed screens in Figma",
                "Developed REST APIs and backend logic using Java and Spring Boot",
                "Managed data using SQL",
                "Used GitHub for version control and resolved merge conflicts in team projects"
            ]
        },
        {
            title: "Software Developer Intern",
            company: "RBrickks Technology",
            location: "Pune",
            period: "May 2025 – Sept 2025",
            type: "Internship",
            current: false,
            responsibilities: [
                "Assisted in developing frontend components using React.js, HTML, and CSS under senior developer guidance",
                "Implemented basic backend APIs using Java and Spring Boot and integrated them with frontend modules",
                "Gained hands-on experience with GitHub version control, including commits, pulls, and basic conflict resolution"
            ]
        },
        {
            title: "Software Intern",
            company: "PhoenixGen Systems Private Limited",
            location: "Pune",
            period: "Oct 2024 – Mar 2025",
            type: "Internship",
            current: false,
            responsibilities: [
                "Developed backend application logic using Java, and integrated services with a HTML and CSS–based frontend, improving overall system performance",
                "Reduced application load time by 40% and increased user engagement by 25% within three months",
                "Utilized Docker for dependency management and environment consistency, improving deployment stability by 50%",
                "Created and optimized Docker images, reducing image size by 35% and build time by 20%"
            ]
        }
    ]

    return (
        <section id="experience" className="section">
            <div className="section-header" data-aos="fade-up">
                <h2>Work Experience</h2>
                <p className="section-description">
                    My professional journey in software development
                </p>
            </div>

            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-item"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div className="experience-header">
                            <div className="experience-title-group">
                                <div className="experience-title-row">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <span className={`exp-type-badge ${exp.type === 'Full-Time' ? 'full-time' : 'intern'}`}>
                                        {exp.type}
                                    </span>
                                </div>
                                <div className="experience-company">
                                    <FaBriefcase className="exp-icon" />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div className="experience-meta">
                                <div className="experience-period">
                                    <FaCalendar className="exp-icon" />
                                    <span>{exp.period}</span>
                                    {exp.current && <span className="current-badge">Current</span>}
                                </div>
                                <div className="experience-location">
                                    <FaMapMarkerAlt className="exp-icon" />
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="experience-responsibilities">
                            {exp.responsibilities.map((resp, respIndex) => (
                                <li
                                    key={respIndex}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 150 + respIndex * 80}
                                >
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
