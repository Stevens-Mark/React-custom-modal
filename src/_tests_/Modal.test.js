
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../lib/components/modal'
import logo from '../lib/components/assets/LogoGoesHere.webp'

// test setup
const closeModal = jest.fn()
const renderModal = () => {
  render( 
  <Modal 
    closeModal={closeModal} 
    modalTheme={{}} 
    heading="Success !"
    message="it works"
    logo={logo}
  />)
}

const lightTheme = {
  pageBg: 'rgba(248, 249, 250, 0.8)',
  modalBg: '#17a2b8',
  modalTxt: '#fff',
  modalBorder: 'solid 2px #000',
  modalBtnColor: '#fff',
  modalShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}

// tests

describe('Modal', () => {
  
  it('Should render a basic modal', async () => {
    render( 
      <Modal 
        closeModal={closeModal} 
        modalTheme={{}} 
        heading="Success !"
      />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success !',
      })
    ).toBeTruthy()
    expect(screen.queryByText(/it works/i)).toBeFalsy()
    expect(screen.queryByRole('img')).toBeFalsy()
  })

  it('Should render without crashing & render a heading, additional message & icon', async () => {
    renderModal()
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success !',
      })
    ).toBeTruthy()
    expect(screen.getByText(/it works/i)).toBeTruthy()
    expect(screen.getByRole('img')).toBeTruthy()
  })

  it('should render default colors', async  () => {
    renderModal()
    expect(screen.getByRole('dialog')).toHaveStyle(
      `background: rgba(237, 240, 241, 0.8)
      color: #fff
      border: none
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
      `)
    expect(screen.getByTestId('svg')).toBeTruthy()
    expect(screen.getByTestId('svg').getAttribute('fill')).toEqual(null)
    expect(screen.getByTestId('svg').getAttribute('stroke')).toEqual(null)
  })

  it('should render the users defined colour theme', async  () => {
    render(
    <Modal
      closeModal={closeModal} 
      modalTheme={lightTheme}
      heading="Success !"
      />)
    expect(screen.getByRole('dialog')).toHaveStyle(
      `background: rgba(248, 249, 250, 0.8)
      color: #fff
      border: solid 2px #000
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
      `)
    expect(screen.getByTestId('svg')).toBeTruthy()
    expect(screen.getByTestId('svg').getAttribute('fill')).toEqual('#fff')
    expect(screen.getByTestId('svg').getAttribute('stroke')).toEqual('#fff')
  })

  it('should call the set state function to close the modal on click', async  () => {
    renderModal()
    userEvent.click(screen.getByRole('button'))
    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it('should call the set state function to close the modal on Escape key', async () => {
    renderModal()
    userEvent.keyboard('{esc}') 
    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})

