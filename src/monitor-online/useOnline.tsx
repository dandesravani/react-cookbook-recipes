import React from 'react'

export const useOnline = () => {
  const [isOnline, setOnline] = React.useState(navigator.onLine)

  React.useEffect(() => {
    // if (window.addEventListener) {
    window.addEventListener('online', () => setOnline(true), false)
    window.addEventListener('offline', () => setOnline(false), false)
    // } else {
    //   document.body.ononline = () => setOnline(true)
    //   document.body.onoffline = () => setOnline(false)
    // }
  }, [])
  return isOnline
}
