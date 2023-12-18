import ContentPageHero from "../components/ContentPageHero";
import Footer from "../components/Footer";
import Img2 from "../assets/img/img_2.jpg";

const AboutUs = () => {
    return(
        <div id="about_page">
            <ContentPageHero pageName="About Us" pageUrl="About"/>
            <div className="about-content">
                <div className="row gx-5">
                    <div className="col-sm-6">
                        <span className="caption">Welcome to Dingwa Consulting</span>
                        <h1>We understand the importance of <span>innovation and professionalism</span></h1>
                        <h5>Quality remains our daily priority in our business and we have implemented a Quality Management System in line with ISO 9001: 2015 as we work towards ISOcertification.</h5>
                        <p>Dingwa Consulting (Pty) ltd specializes in equipment and parts sourced from OEMs and approved manufacturing partners locally and globally. Dingwa Consulting commands extensive experience with regards to requirements for equipment productivity, maintenance, repairs, and genuine parts. We have strong networks and sound relationships with manufacturers, agents, and distributors of parts locally and globally.Besides parts distribution Dingwa Consulting is rich in machinery maintenance expertise. Our vision is to establish customized solutions to ensure minimal mean-time-to-repair intervals.</p>
                        <p>We envisions inclusive economic growth by aiming to employ individuals and partnering with black-owned small businesses from mining communities. Our ethic does not compromise on quality of products and services, processes, and results. In the world of fast-growing economies, increased volatility, uncertainty, complexity, and ambiguity, we aim to apply innovative inventory supply solutions. The key driver of our inventory supply management executed in partnership with customers is collaborative planning, forecasting, and replenishment.</p>
                    </div>
                    <div className="col-sm-6">
                        <img src={Img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="values">
                <div className="row">
                    <div className="col-sm-4">
                        <h4>CORE VALUES</h4>
                        <ul > 
                            <li><span>People focus</span> - We train and develop our employees to their full potential.We value their contribution.</li>
                            <li><span>Innovativeness</span> - We strive to create new technology-driven solutions and processes.</li>
                            <li><span>Intrapreneurial</span> – Our employees exploit and enhance their full entrepreneurial capabilities.</li>
                            <li><span>Family spirit</span> – We treat each other as members of our own family.</li>
                            <li><span>Proactivity</span> – We aim to predict potential problems and proactively seek innovative solutions.</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h4>CLIENT CARE PLAN</h4>
                        <ul>
                            <li>Reliable service delivery always.</li>
                            <li>Quick responsiveness always.</li>
                            <li>Treating customers as business partners always.</li>
                            <li>Treat all stakeholders with respect always.</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h4>OBJECTIVES</h4>
                        <ul>
                            <li>To enhance our clients’ business goals and objectives.</li>
                            <li>To actively work towards improving social equality, especially for women and youths.</li>
                            <li>To enforce employment equity and adherence to labor law requirements.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;