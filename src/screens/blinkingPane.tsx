import { useState, useRef, useEffect } from 'react'
import { Pane, Rectangle } from 'react-leaflet'

// просто мигающий раз в 0.5 секунд прямоугольник, где координаты этого прямоугольника - это outer
// т.е. не мигающий некоторое время, а мигающий постоянно (планировала пофиксить это позже)
export default function BlinkingPane(outer: any) {
  const [render, setRender] = useState<boolean>(true)
  const timerRef = useRef<any>()
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRender((r) => !r)
    }, 500)
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
      <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
    </Pane>
  )
}
