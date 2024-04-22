
import './styles.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="logo-container">
                    <img className="logo" src="src/assets/Logo-WB.jpeg" alt="Logo" />
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/academy">Academy</a></li>
                        <li><a href="/schedule">Schedule</a></li>
                        <li><a href="/membership">Membership</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>
                        356 El Camino Real<br />
                        San Bruno, CA 94066<br />
                        Phone: <a className="phone-link" href="tel:+6505022902">(650)502-2902</a>
                    </p>
                </div>
                <div className="logo-container">
                    <img className="logo" src="src/assets/Logo-pitbull.jpeg" alt="Logo" />
                </div>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/dojohiguma/" className="icon brands alt fa-facebook-f">
                    <span className="label">Facebook</span>
                </a>
                <a href="https://www.instagram.com/dojohiguma" className="icon brands alt fa-instagram">
                    <span className="label">Instagram</span>
                </a>
                <a href="mailto:waurimanborges@gmail.com" className="icon solid alt fa-envelope">
                    <span className="label">Email</span>
                </a>
            </div>
            <div className="copyright">
                <p>Copyright © <span id="currentYear">{currentYear}</span> | Wauriman Borges BJJ | All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
