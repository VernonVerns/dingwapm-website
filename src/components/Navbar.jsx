const Navbar = () => {
    return(
        <div className="navigation-bar">
            <div className="nav-brand">Logo</div>
            <ul className="list-unstyled menu-items">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Our Team</a></li>
                <li><a href="/">Our Story</a></li>
            </ul>
            <a href="/contact" className="call-to-action">Get in touch</a>
        </div>
    )
}

export default Navbar;