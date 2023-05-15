import twitter from "../../public/images/twitter.png"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import github from "../../public/images/github.png"


function Footer() {
    return (
        <div className="footer">
            <div className="footer-social-logos">
                <img src={twitter} alt="Twitter logo"/>
                <img src={facebook} alt="Facebook logo"/>
                <img src={instagram} alt="Instagram logo"/>
                <img src={github} alt="Github logo"/> 
            </div>
        </div>
    )
}

export default Footer