// src/pages/NotFound.jsx
export default function NotFound(){
  return (
    <section className="not-found">
      <div className="not-found-content">
        <div className="not-found-visual">
          <div className="error-code">404</div>
          <div className="error-animation">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        
        <div className="not-found-text">
          <h1>Oops! Page Not Found</h1>
          <p>
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, it happens to the best of us!
          </p>
          
          <div className="not-found-actions">
            <a href="/" className="no-underline">
              <button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
                Go Home
              </button>
            </a>
            <a href="#contact" className="no-underline">
              <button className="secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
