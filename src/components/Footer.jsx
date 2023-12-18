import React from "react";

const Footer = () => {
    const currYear = new Date().getFullYear()
    return(
        <div className="dingwa-footer">
            <div className="top-part">
                <div className="row gx-4 gy-4">
                    <div className="col-sm-4">
                        <div>Logo</div>
                        <p>
                            Our ethic does not compromise onquality of products and services, processes, and results. In the world offast-growing economies, increased volatility, uncertainty, complexity, andambiguity, we aim to apply innovative inventory supply solutions.
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <h4>Useful links</h4>
                        <ul className="list-unstyled">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h4>Get in touch</h4>
                        <ul>
                            <li>Mon - Fri: 8h00-17h00</li>
                            <li>7 Main Road, Eastleigh, Edenvale, 1609</li>
                            <li><a href="tel:+27101091938">(+27)10 109 1938</a></li>
                            <li><a href="mailto:info@dingwapm.co.za">info@dingwapm.co.za</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2019 - {currYear} Dingwa Consulting. All rights reserved. Designed by <a href="http://www.myplusplus.com" target="_blank" rel="noopener noreferrer">mY++ Inc.</a></p>
            </div>
        </div>
    )
}

export default Footer;