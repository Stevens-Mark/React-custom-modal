import { useState, createContext } from "react"
export const ThemeContext = createContext()

/**
 * @function ModeProvider
 * @returns dark/light theme provider: css styling (depending on state)
 */
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
      <ThemeContext.Provider value={{ mode, toggleMode }}>
          {children}
      </ThemeContext.Provider>
  )
}