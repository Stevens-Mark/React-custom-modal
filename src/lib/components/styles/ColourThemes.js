//  colours used in examples

const colors = {

  // example light mode colours
  primary: '#17a2b8',
  secondary: '#000',
  tertiary: '#fff',
  light: '#f8f9fa',
  lightOpacity: 'rgba(248, 249, 250, 0.8)',

 // example dark mode colours
  darkNavy: '#020c1b',
  navy: '#0a192f',
  lightestNavy: '#233554',
  lightestNavyOpacity: 'rgba(35, 53, 84, 0.8)',
  lightGreen: '#64ffda',
  chromeBlue: '#3297FD',
  
  // other colours
  succes: '#28a745',
  teal: '#20c997',
}

export default colors


// Define the theme colours for the modal
// (set your colours here or leave values empty '' for default theme)


// light mode 
export const lightTheme = {
pageBg: `${colors.lightOpacity}`,
modalBg: `${colors.primary}`,
modalTxt: `${colors.tertiary}`,
modalBorder: `solid 2px ${colors.secondary}`,
modalBtnColor: `${colors.tertiary}`,
modalShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}

// dark mode
export const darkTheme = {
pageBg: `${colors.lightestNavyOpacity}`,
modalBg: `${colors.navy}`,
modalTxt: `${colors.lightGreen}`,
modalBorder:`solid 2px ${colors.chromeBlue}`,
modalBtnColor: `${colors.lightGreen}`,
modalShadow: 'rgba(0, 0, 0, 1) 0px 5px 15px'
// modalRadius: "false",
}

// pageBg: sets background color of the whole page background when modal is open
// modalBg: sets background color of the modal body
// modalTxt: sets text color of the modal    
// modalBorder: sets border of the modal
// modalBtnColor: sets the color of the "X" close button on the modal
// modalShadow: sets the box shadow of the modal (defalt: 'none')
// modalRadius: 'false' removes default border-radius of 20px
