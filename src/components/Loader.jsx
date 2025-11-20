// src/components/Loader.jsx
import { FaCode, FaReact } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function Loader({ className = '', progress = 0, onSkip }) {
  return (
    <div className={`loader-container ${className}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <FaCode className="loader-icon main-icon" />
          <div className="loader-orbit">
            <FaReact className="loader-icon orbit-icon react-icon" />
            <HiSparkles className="loader-icon orbit-icon sparkle-icon-1" />
            <HiSparkles className="loader-icon orbit-icon sparkle-icon-2" />
          </div>
        </div>

        <div className="loader-text">
          {/* <h2>Rudransh Yerekar</h2> */}
          <p>Loading portfolio...</p>
        </div>

        <div className="loader-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-percentage">
            {Math.round(progress)}%
          </div>
          <div className="progress-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      <div className="loader-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
      </div>
    </div>
  )
}