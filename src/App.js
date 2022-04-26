import './style/style.scss'
import Modal from './Modal/Modal'
import { useRef, useEffect, useState } from 'react'
import { LOCATION } from './helper/sectionWrap'

function App() {
  let button = useRef(null)
  const [bounding, setBounding] = useState(null)
  const [position, setPosition] = useState(null)
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    let bound = button.current.getBoundingClientRect()
    const handleBuond = () => {
      setBounding(bound)
    }

    window.addEventListener('resize', handleBuond)

    return () => {
      window.removeEventListener('resize', handleBuond)
    }
  }, [bounding])

  useEffect(() => {
    const handleHiddenProtal = () => {
      setHidden(false)
    }

    let childrenNode = Array.prototype.slice.call(button.current.children)
    childrenNode.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation()
        handleHidden(item.className)
      })
    })
    window.addEventListener('click', handleHiddenProtal)

    return () => {
      window.removeEventListener('click', handleHiddenProtal)
    }
  }, [])

  const handleHidden = (location) => {
    setHidden(true)
    setPosition(location)
    setBounding(button.current.getBoundingClientRect())
  }

  return (
    <div className="App">
      {hidden && (
        <Modal bounding={bounding} position={position}>
          Pop-Up Image
        </Modal>
      )}
      <div className="list__button" ref={button}>
        <button className={LOCATION.TOP}>Top</button>
        <button className={LOCATION.RIGHT}>Right</button>
        <button className={LOCATION.LEFT}>Left</button>
        <button className={LOCATION.BOTTOM}>Bottom</button>
      </div>
    </div>
  )
}

export default App
