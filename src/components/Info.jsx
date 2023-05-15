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
                <div className="btn--content">
                    <button className="btn--email">
                        {/* <img src={email}/> */}
                        Email
                    </button>
                </div>
                <div className="btn--content">
                    <button className="btn--linkedin">
                        {/* <img src={linkedin}/> */}
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info