import "../styles/Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/placeholder.svg?height=40&width=40" alt="UBC Study Space Logo" className="logo" />
          <span className="site-title">UBC Study Spaces</span>
        </div>

        <nav className="desktop-nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>

        <button className="login-button desktop-only">Login</button>

        <button className="menu-button mobile-only">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}

