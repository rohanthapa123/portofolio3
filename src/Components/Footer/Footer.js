import "./Footer.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <div>
                            <p>Sanepa-2,Lalitpur</p>
                            <p>Nepal</p>
                        </div>
                    </div>
                    <div className="location">
                        <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <h4>
                        <div>
                            <p> +977-9876543210</p>
                        </div>
                        </h4>
                    </div>
                    <div className="location">
                        <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <h4>
                        <div>
                            <p>rohan123@gmail.com</p>
                        </div>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>This is me Rohan Thapa. CEO & Founder of RT-ICT.I enjoy discussing new projects and design challenges</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;