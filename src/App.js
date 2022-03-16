
import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "./utils/context"
// for styling
import styled from 'styled-components'
import colors from './lib/components/styles/ColourThemes'
import { lightTheme, darkTheme } from "./lib/components/styles/ColourThemes"
// import component & logo
import Modal from './lib/components/modal'
import logo from './lib/components/assets/LogoGoesHere.webp'

/**
 * CSS using styled components
 */
const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
`;

const Button = styled.button`
  background: white;
  border-radius: 1rem;
  color: ${colors.secondary};
  cursor: pointer;
  font-size: 1rem;
  margin: 30px;
  padding: 10px;
`;

export const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  // const [mode, setMode] = useState('light')
  // const toggleMode = () => { setMode(mode === 'light' ? 'dark' : 'light') }

  const { toggleMode, mode } = useContext(ThemeContext)
  const  closeModal = () => { setModalIsOpen(false) }
  const  handleSubmit = () => { setModalIsOpen(true) }

  return (
    <Main>
      <h1>Example</h1>

      <Button  onClick={() => toggleMode()}>Change Mode : {mode === 'light' ? '☀️' : '🌙'}</Button>

      <Button  onClick={() => handleSubmit()}>Open Modal</Button>
      
      {modalIsOpen && 
      
      <Modal 
        closeModal={closeModal} 
        modalTheme={mode ==='dark'? darkTheme : lightTheme} 
        heading="Message here"
        message="optional shorter message here"
        logo={logo}
        animation={true}
      />
      }
    </Main>
  )
}

export default App
