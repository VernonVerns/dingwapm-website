import ContentPageHero from "../components/ContentPageHero";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import Footer from "../components/Footer";

const Contact = () => {
    return(
        <div id="contact_page">
            <ContentPageHero pageName="Contact Us" pageUrl="Contact"/>
            <div className="contact-content">
                <div className="section-header">
                    <span>Contact Us</span>
                    <h4>Message us for more details</h4>
                    <p>We can develop a collaborative operational model that is lean and saves you money, time, and operational strife.</p>
                </div>

                <div className="row gx-5 gy-3">
                    <div className="col-sm-7">
                        <form action="" method="post">
                            <div className="row gx-3 gy-3">
                                <div className="col-sm-6">
                                    <input type="text" name="name" id="name" placeholder="Full name (e.g. John Doe)" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <input type="text" name="subject" placeholder="Subject"/>
                                </div>
                                <div className="col-sm-12">
                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="main-btn">Send Message</button>
                        </form>
                    </div>
                    <div className="col-sm-5">
                        <div className="contact-details">
                            <div className="contact-card">
                                <div className="icon-side">
                                    <LocalPhoneIcon />
                                </div>
                                <div className="contact-info">
                                    <span>Phone:</span>
                                    <a href="tel:+27101091938">(+27)10 109 1938</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="icon-side">
                                    <MailOutlineIcon />
                                </div>
                                <div className="contact-info">
                                    <span>Email:</span>
                                    <a href="mailto:info@dingwapm.co.za">info@dingwapm.co.za</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="icon-side">
                                    <LanguageIcon />
                                </div>
                                <div className="contact-info">
                                    <span>Website:</span>
                                    <a href="http://www.dingwapm.co.za" target="_blank" rel="noopener noreferrer">www.dingwapm.co.za</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="addresses row">
                    <div className="col-sm-3">
                        <div className="address main-office">
                            <h4>Gauteng</h4>
                            <address>
                                17 Main Road, Eastleigh, Edenvale, 1609
                            </address>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="address">
                            <h4>Mpumalanga</h4>
                            <address>
                                Elandspoort Farm, Perdekop, Mpumalang, 2465
                            </address>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="address">
                            <h4>North west</h4>
                            <address>
                                O.R. Tambo St, Nuwe Dorp (CBD), Klerksdorp, 2570
                            </address>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="address">
                            <h4>Limpopo</h4>
                            <address>
                                Rodium Ave, Steelpoort, Fetagomo, Tubatse, 1133
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;