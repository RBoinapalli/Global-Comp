import "../css/Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="images/logo.png" alt="Global IT Consultants Logo" />
                <h1>Global IT Consultants</h1>
            </div>
            <nav>
                <button className="nav-toggle">☰</button>
                <ul className="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="jobs.html">Jobs</a></li>
                    <li><a href="admin.html">Admin</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;