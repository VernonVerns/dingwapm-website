import ContactBar from "./ContactBar";
import Navbar from "./Navbar";

const ContentPageHero = ({pageName, pageUrl}) => {
    return(
        <div className="content-page-hero">
            <div className="overlay-bg">
                <ContactBar />
                <Navbar />

                <div className="page-title">
                    <p><a href="/">Home/</a> {pageUrl}/</p>
                    <h1>{pageName}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default ContentPageHero;