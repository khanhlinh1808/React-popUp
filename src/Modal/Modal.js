import ReactDOM from 'react-dom'
import { useRef, useEffect, useState } from 'react'
import sectionWrap from '../helper/sectionWrap'
import contentImg from './nmixx.jpg'

const Modal = (props) => {
    let { bounding, children, position } = props
  let widthContent = useRef(null)
  const [style, setStyle] = useState(null)

  useEffect(() => {
    let boundItem = widthContent.current.getBoundingClientRect()
    setStyle(sectionWrap(position, bounding, boundItem))
  }, [position, bounding])

  return ReactDOM.createPortal(
    <div id="modal-wrapper" style={style} ref={widthContent}>
      <h4>{children}</h4>
      <img src={contentImg} />
    </div>,
    document.querySelector('#portal'),
  )
}

export default Modal