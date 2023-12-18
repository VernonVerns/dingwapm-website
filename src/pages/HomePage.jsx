import ContactBar from "../components/ContactBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return(
        <div id="home_page">
            <ContactBar />
            <Navbar />
            <div className="hero">
                <div className="content">
                    <h1>Building Your Vision with Precision</h1>
                    <p>We are Dingwa, your trusted partner in the world of construction. Quality remains our daily priority in our business and we have implemented a Quality Management System for assurance.</p>
                    <button type="button" className="learn-more-btn">Learn More</button>
                </div>
            </div>
            <div className="stats-container">
                <h2>Our Legacy of <span>Excellence</span></h2>
                <p>Our team is composed of highly skilled Engineers, Technicians, Estimators, and Project Managers, equipped to handle low, medium, and high-complexity projects.</p>
                <ul className="list-unstyled stats">
                    <li>
                        <h4>20+</h4>
                        <span>Services Offered</span>
                    </li>
                    <li>
                        <h4>50+</h4>
                        <span>Happy Customers</span>
                    </li>
                    <li>
                        <h4>230+</h4>
                        <span>Skilled Employees</span>
                    </li>
                    <li>
                        <h4>7+</h4>
                        <span>Years Experience</span>
                    </li>
                </ul>
            </div>
            <div className="why-dingwa">
                <h2>Why choose <span>Dingwa Consulting</span></h2>
                <p></p>
            </div>
            <Footer />
        </div>
    )    
}

export default HomePage;