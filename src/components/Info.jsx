import headshot from "../../public/images/Diana.png"
import email from "../../public/images/Mail.png"
import linkedin from "../../public/images/linkedin.png"

function Info() {
    return (
        <div className="info">
            <img className="headshot" src={headshot} alt="Headshot of woman looking straight ahead, with her hair up" />
            <h1>Diana S. Cardona</h1>
            <h4>Full-stack Developer</h4>
            <h5>github.com/dscardona</h5>
            <div className="buttons">
                <button className="btn--email btn--content">
                    <img src={email}/>
                    <span className="btn-text">Email</span>
                </button>
                <button className="btn--linkedin btn--content">
                    <img src={linkedin}/>
                    <span className="btn-text">LinkedIn</span>
                </button>
            </div>
        </div>
    )
}

export default Info