import PropTypes from 'prop-types'
import React, { useEffect } from "react"
// svg icon as react component
import { ReactComponent as CloseButton } from '../components/assets/close-x.svg'
// styling
import { ThemeProvider } from "styled-components"
import { ModalWrapper, ModalBody, Close, Content } from './styles/modal'

/**
 * Renders a confirmation modal
 * @function Modal
 * @param {function} closeModal: 
 * @param {object} modalTheme: colour theme for modal
 * @param {string} logo: optional logo
 * @param {string} heading: main heading
 * @param {string} message: optional shorter message
 * @param {boolean} animation: optionally animate modal or not
 * @returns {JSX}
 */
 const Modal = ( { closeModal, modalTheme, logo, heading, message, animation } ) => {

  const activeElement = document.activeElement

  const handleEscape = () => { closeModal()}
  const handlekeys = (e) => { e.preventDefault() }   // prevent keys: effectively traps focus in modal
  
  const keyListenersMap = new Map([   // map of keyboard listeners
    [27, handleEscape],
    [9, handlekeys],
    [18, handlekeys],
    [37, handlekeys],
    [38, handlekeys],
    [39, handlekeys],
    [40, handlekeys],
  ])

  const handleKeydown = (e) => {
    const listener = keyListenersMap.get(e.keyCode)  // get the listener corresponding to the pressed key  
    return listener && listener(e)                  // call the listener if it exists
  }
  
 useEffect(() => {   
    document.addEventListener('keydown', handleKeydown)
    document.querySelector('.modalButton').focus()
    return () => {
      document.removeEventListener('keydown', handleKeydown)  // Detach listener when component unmounts
      activeElement.focus()                                   // Return focus to the previously focused element
    }
  
  }, )

  return (
    <ThemeProvider theme={modalTheme}>
      <ModalWrapper animation={animation} role="dialog" aria-modal="true" aria-labelledby="modal__title">
        <ModalBody animation={animation}>   
          <Close aria-label="Close" className='modalButton' onClick={() => closeModal()}>
            <CloseButton fill={modalTheme.modalBtnColor} stroke={modalTheme.modalBtnColor}/>
          </Close>
            <Content>
                {logo && <img src={logo} alt=""/> }
                <h1 id="modal__title">{heading}</h1>
                {message && <p>{message}</p> }
            </Content>
        </ModalBody>
      </ModalWrapper>
    </ThemeProvider>
  )
}

export default Modal

// Prototypes
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalTheme: PropTypes.object.isRequired,
  logo: PropTypes.string,
  heading: PropTypes.string.isRequired,
  message : PropTypes.string,
};



