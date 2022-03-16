import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from './utils/context'
import colors from './lib/components/styles/ColourThemes'

/**
 * CSS Global styles for the site using styled.components
 */
 const StyledGlobalStyle = createGlobalStyle`
 body {  
  -webkit-font-smoothing: antialiased;
  background-color:${colors.tertiary};
  box-sizing: border-box;
  color: ${({ isDarkMode }) => (isDarkMode ? `${colors.tertiary}` : `${colors.secondary}`)};
  font-family: Arial, sans-serif; 
  margin: auto;
  max-width: 1920px;
} 

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

main {
  min-height: 100vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.darkNavy}` : `${colors.primary}`)};
}
`;

/**
 * @function GlogalStyle
 * @returns global theme css styling (either for day or night depending on state)
 */
 function GlobalStyle() {
  const { mode } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={mode === 'dark'} />
}
export default GlobalStyle
