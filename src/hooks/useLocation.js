import { useState, useEffect } from "react"

export const useLocation = () => {
  const [location, setLocation] = useState({
    locationLoaded: null,
    lat: null,
    long: null,
    error: null,
  })

  const onSuccess = (location) => {
    setLocation({
      locationLoaded: true,
      lat: location.coords.latitude,
      long: location.coords.longitude,
    })
  }

  const onError = (error) => {
    setLocation({
      locationLoaded: false,
      error,
    })
  }

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  })

  return location
}
