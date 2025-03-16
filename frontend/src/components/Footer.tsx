import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-info">
            <div className="footer-logo-container">
              <img src="/placeholder.svg?height=30&width=30" alt="UBC Study Space Logo" className="footer-logo" />
              <span className="footer-title">UBC Study Spaces</span>
            </div>
            <p className="footer-tagline">Helping students find available study spaces since 2024</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-links-column">
              <p className="footer-links-title">Resources</p>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
              <a href="#" className="footer-link">
                Privacy
              </a>
            </div>

            <div className="footer-links-column">
              <p className="footer-links-title">Follow Us</p>
              <a href="#" className="footer-link">
                Twitter
              </a>
              <a href="#" className="footer-link">
                Instagram
              </a>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2024 UBC Study Spaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

