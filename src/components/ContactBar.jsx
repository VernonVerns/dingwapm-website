import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactBar = () => {
    return(
        <div className="contact-bar">
            <div className="contacts">
                <a href="mailto:info@dingwapm.co.za"><MailOutlineIcon fontSize="small" /> info@dingwapm.co.za</a>
                <a href="tel:+27101091938"><LocalPhoneIcon fontSize="small" /> 010 109 1938</a>
            </div>
            <div className="social-links">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="small" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="small" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize="small" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="small" /></a>
            </div>
        </div>
    )
}

export default ContactBar;