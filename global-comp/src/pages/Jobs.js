import React, { useState } from 'react';
import '../css/styles.css';


const Jobs = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const jobs = [
        {
            id: 'network-engineer',
            title: 'Network Engineer',
            image: 'images/network-engineer.jpg',
            description: 'This role requires expertise in next-generation firewalls, particularly Palo Alto and Zscaler, along with a solid understanding of AWS and Azure environments. Candidates should have experience deploying security policies, tuning firewall policies with tools like Algosec, and addressing root cause analysis, while demonstrating strong communication skills in English. Experience with Cisco ISE, Aruba ClearPass, and L2 network security in Cisco TAC operations is also essential.',
        },
        {
            id: 'java-developer',
            title: 'Java Full Stack Developer',
            image: 'images/java-fullStack-dev.png',
            description: 'The Java Full Stack Developer will analyze functional requirements, design microservices architecture, and code, test, and deploy application components, ensuring high-quality outputs that meet KPIs. The role requires strong knowledge of Java, Spring, and cloud technologies, along with experience in front-end frameworks like React or Angular. Proficiency in working under tight deadlines, version control systems, and familiarity with containerization technologies is essential.',
        },
        {
            id: 'flutter-developer',
            title: 'Flutter Developer',
            image: 'images/flutter-dev.png',
            description: 'The Flutter Developer is responsible for designing, developing, and deploying applications using the Flutter framework and Dart language, with a strong focus on payment integration processes. Collaboration with product leads and code review as part of the CI/CD cycle are key aspects, along with experience in mobile app development for iOS and Android. Excellent communication skills and experience in a remote work environment are preferred.',
        },
        {
            id: 'data-analyst',
            title: 'Data Analyst',
            image: 'images/data-analyst.jpg',
            description: 'The Data Analyst will analyze data using statistical techniques and visualization tools to derive insights that inform business decisions. Proficiency in Python, SQL, and data visualization libraries, along with experience in building machine learning models, is essential. Strong problem-solving skills and the ability to communicate complex findings are required, along with experience mentoring junior analysts.',
        },
        {
            id: 'full-stack',
            title: 'Full Stack Developer',
            image: 'images/full-stack-dev.jpg',
            description: 'The Full Stack Developer must have proven experience in developing large-scale distributed web applications, with knowledge of multiple back-end languages and front-end technologies like React and Angular. Familiarity with database systems, caching technologies, and AWS is essential, along with strong problem-solving and communication skills. Experience using version control systems is also required.',
        },
        {
            id: 'database-developer',
            title: 'Database Developer',
            image: 'images/database-dev.jpg',
            description: 'The Database Developer will leverage strong SQL skills to write complex queries, design data models, and ensure optimal database performance. Experience with relational database management systems and performance tuning is essential, along with the ability to document data modeling requirements. Excellent communication skills are necessary for collaborating with stakeholders.',
        },
        {
            id: 'cyber-security',
            title: 'Cyber Security',
            image: 'images/cubersecurity.png',
            description: 'The Cyber Security professional should have knowledge of standards such as ISO 27001 and experience with IAM services and identity federation protocols. Strong analytical and communication skills are essential, along with an understanding of information security and compliance concepts. Relevant certifications and experience with hybrid cloud architectures are preferred.',
        },
        {
            id: 'android-developer',
            title: 'Android Developer',
            image: 'images/android-dev.png',
            description: 'The Android Developer will design and build mobile applications while collaborating with cross-functional teams to implement features. Knowledge of payment integration, Android fundamentals, and RDBMS is required, along with experience in using third-party libraries and APIs. Strong problem-solving skills and familiarity with AI/ML development will be advantageous.',
        },
    ];

    const toggleJobDetails = (id) => {
        setSelectedJob(selectedJob === id ? null : id);
    };

    const openApplyForm = (jobTitle) => {
        setSelectedJob(jobTitle);
        setShowApplyModal(true);
    };

    const closeModal = () => {
        setShowApplyModal(false);
        setShowThankYouMessage(false);
    };

    const submitApplication = (event) => {
        event.preventDefault();
        setShowApplyModal(false);
        setShowThankYouMessage(true);
    };

    return (
        <div className="jobs-page">
            <header>
                <div className="logo">
                    <img src="images/logo.png" alt="Global IT Consultants Logo" />
                    <h1>Global IT Consultants</h1>
                </div>
                <nav>
                    <button className="nav-toggle">☰</button>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/jobs">Jobs</a></li>
                        <li><a href="/admin">Admin</a></li>
                    </ul>
                </nav>
            </header>

            <section id="jobs">
                <div className="jobs-banner">
                    <h2>Jobs</h2>
                </div>
                <div className="jobs-list">
                    {jobs.map((job) => (
                        <div key={job.id} className="job" onClick={() => toggleJobDetails(job.id)}>
                            <img src={job.image} alt={`${job.title} Image`} />
                            <h4>{job.title}</h4>
                            {selectedJob === job.id && (
                                <div className="job-details">
                                    <p>{job.description}</p>
                                    <button className="apply-btn" onClick={() => openApplyForm(job.title)}>Apply</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Apply Modal */}
            {showApplyModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h3>Apply for {selectedJob}</h3>
                        <form onSubmit={submitApplication}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="major">Major:</label>
                            <input type="text" id="major" name="major" required />
                            <label htmlFor="position">Position Applied:</label>
                            <input type="text" id="position" name="position" value={selectedJob} readOnly />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Thank you message */}
            {showThankYouMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Thank you for applying!</h3>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Jobs;
