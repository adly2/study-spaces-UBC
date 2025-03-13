import "../styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Study Space at UBC</h1>
          <p className="hero-description">
            Real-time updates on occupancy levels across campus. Never waste time searching for a spot again.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">View Study Spaces</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/placeholder.svg?height=400&width=500" alt="UBC Campus" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

