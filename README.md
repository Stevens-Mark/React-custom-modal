# A Customisable Modal React component (Light/Dark mode & animation)

## About this the Modal component

This modal comes with default colours already installed, but can be changed if preferred.
It is also possible to set themes for both light & dark modes (if you need this option) as well as choose whether you want to use the preset animation. Note: Focus trap is already applied to the modal for keyboard users.

You can
- [x] Change the modal's page background colour
- [x] Change the modal's body colour
- [x] Change the modal's text colour
- [x] Change the modal's border outline
- [x] Change the modal's close button colour
- [x] Add/remove/change the modal's box shadow
- [x] Add/remove the modal's default border-radius
- [x] Add a modal logo
- [x] Change modal's heading
- [x] Add a secondary message
- [x] Add/remove default modal animation (animation: modal descends into view)

## Installation

You can install this component with npm or yarn:

    npm i react-custom-modal-by-msparkystevens

    yarn add react-custom-modal-by-msparkystevens

## Import the Modal component (How to use)

Import the Modal component into the file where you want to use it, then simply add/remove the options you want and/or define your colours as needed.

    import { Modal } from 'react-custom-modal-by-msparkystevens'

# Examples

I have provided some examples of styling the modal, starting with a basic modal and including how a modal with light/dark themes can be implemented.

## Example ONE

A Basic Modal using the default colours & ONE simple Heading message (no animation)

<p align="center">
  <img src="/src/lib/components/assets/screenShots/DefaultBasic.png" alt="Default Modal" title="Default Modal">
</p>

**App.js**

```js
import { useState } from "react"
import { Modal} from 'react-custom-modal-by-msparkystevens'

const App = () => {

  // state & function to open and close the Modal
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const  closeModal = () => { setModalIsOpen(false) }
  const  handleSubmit = () => { setModalIsOpen(true) }

   return (
    <Main>
      <h1>Basic modal with simple message and default colours</h1>

      <Button  onClick={() => handleSubmit()}>Open Modal</Button>

      {modalIsOpen && 
      <Modal 
        closeModal={closeModal}     // function to set state: close modal (required)
        modalTheme={{}}             // if {{}} default colours will be applied (required)
        heading="Message here"      // put heading message here (required)
      />
      }
    </Main>
  )
}
export default App
```

## Example TWO

FULL modal with a user defined colour theme, logo, Heading and short message (animated modal)

<p align="center">
  <img src="/src/lib/components/assets/screenShots/UserDefined.png" alt="User Defined Modal" title="User Defined Modal">
</p>

**App.js**

```js
import { useState } from "react"
// import component & logo for modal (see below)
import { Modal } from 'react-custom-modal-by-msparkystevens'
import logo from './path/to/your/asset/image...'


const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const  closeModal = () => { setModalIsOpen(false) }
  const  handleSubmit = () => { setModalIsOpen(true) }

  // Define the theme colours for the modal (if any left blank '' the default colours are applied)

  const lightTheme = {
    pageBg: '#20c997',                            // set background colour of whole page when modal is open
    modalBg: '#28a745',                           // set background colour of the modal body
    modalTxt: '#fff',                             // set text colour of the modal
    modalBorder: 'solid 2px #000',                // set border outline of the modal
    modalBtnColor: '#fff',                        // set colour of the "X" close button on the modal
    modalShadow: 'rgba(0, 0, 0, 1) 0px 5px 15px'  // set modal box shadow
    // modalRadius: "false",                      // remove the default border-radius
  }

   return (
    <Main>
      <h1>modal with a user defined colour theme...</h1>

      <Button  onClick={() => handleSubmit()}>Open Modal</Button>

      {modalIsOpen && 
      <Modal 
        closeModal={closeModal}                 // function to close the modal (required)
        modalTheme={lightTheme}                 // 'lightTheme' added here to pass the theme to the modal
        heading="Your message"                  // heading here (required)
        message="optional shorter message here" // short message here (optional)
        animation={true}                        // animate modal (if omitted, default is false) (optional)
      />
      }
    </Main>
  )
}
export default App

```

## Example THREE

FULL modal with user defined colour themes (LIGHT & DARK MODE) (animated modal)

<p align="center">
  <img src="/src/lib/components/assets/screenShots/UserDefinedLightMode.png" alt="Light Mode Modal" title="Light Mode Modal">
  <img src="/src/lib/components/assets/screenShots/UserDefinedDarkMode.png" alt="Dark Mode Modal" title="Dark Mode Modal">
</p>

**index.js**

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ModeProvider } from './utils/context'

// wrap components in Mode/theme provider

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>          
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

```

**Context.js**

```js
import { useState, createContext } from "react"
export const ThemeContext = createContext()

// dark/light theme provider: css styling (light/dark depending on state)
export const ModeProvider = ({ children }) => {

  // state light/dark
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')    // toggle state between light/dark
  }
  return (
      <ThemeContext.Provider value={{ mode, toggleMode }}>
          {children}
      </ThemeContext.Provider>
  )
}

```

**App.js**

```js
import { useState, useContext } from "react"
import { ThemeContext } from "./utils/context"
// import component & logo for modal (see below)
import { Modal } from 'react-custom-modal-by-msparkystevens'
import logo from './path/to/your/asset/image...'

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const  closeModal = () => { setModalIsOpen(false) }
  const  handleSubmit = () => { setModalIsOpen(true) }

  const { toggleMode, mode } = useContext(ThemeContext)
  
  // Define light theme
  const lightTheme = {
    pageBg: 'rgba(248, 249, 250, 0.8)',               
    modalBg: '#17a2b8',              
    modalTxt: '#fff',                
    modalBorder: 'solid 2px #000',   
    modalBtnColor: '#fff',
    modalShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'            
  }

  // Define dark theme
  const darkTheme = {
    pageBg: 'rgba(35, 53, 84, 0.8)',               
    modalBg: '#0a192f',              
    modalTxt: '#64ffda',                
    modalBorder: 'solid 2px #3297FD',   
    modalBtnColor: '#64ffda', 
    modalShadow: 'rgba(0, 0, 0, 1) 0px 5px 15px'            
  }

  return (
    <Main>
      <h1>FULL modal (LIGHT and DARK MODE)</h1>
      
      <Button  onClick={() => hanleSubmit()}>Open Modal</Button> 
      <Button  onClick={() => toggleMode()}>Change Mode : {mode === 'light' ? '☀️' : '🌙'}</Button>

      {modalIsOpen && 
      <Modal 
        closeModal={closeModal} 
        modalTheme={mode ==='dark'? darkTheme : lightTheme} // 'lightTheme' or 'darkTheme' passed
        heading="Message here"                              // as theme depending on state
        message="optional shorter message here"
        logo={logo}
        animation={true}                               
      />
      }
    </Main>
  )
}
export default App

```