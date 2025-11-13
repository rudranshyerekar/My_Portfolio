// src/hooks/useLoader.js
import { useState, useEffect } from 'react'

export const useLoader = (minLoadTime = 2500) => {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)

  const skipLoading = () => {
    setProgress(100)
    setFadeOut(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  useEffect(() => {
    // Simulate progressive loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Simulate realistic loading progression
        const increment = Math.random() * 15 + 5
        return Math.min(prev + increment, 100)
      })
    }, 200)

    // Handle minimum load time
    const timer = setTimeout(() => {
      setProgress(100)
      setFadeOut(true)
      
      // Wait for fade out animation
      setTimeout(() => {
        setLoading(false)
      }, 800)
    }, minLoadTime)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [minLoadTime])

  return { loading, fadeOut, progress, skipLoading }
}