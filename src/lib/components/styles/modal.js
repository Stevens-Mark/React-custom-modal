import styled, { keyframes, css } from "styled-components"

/**
 * fade in keyframes
 */
 const modalopen = keyframes`
 from { opacity: 0; transform: translateY(-200px); }
 to { opacity: 1; }
`;

const fadeIn = keyframes`
 from { opacity: 0; }
 to   { opacity: 1; }
`;

/**
* CSS for the component using styled.components
*/
export const ModalWrapper = styled.div`
 width: 100%;
 height: 100vh;
 align-items: center;
 animation: ${(props) => props.animation && css` ${fadeIn} 0.5s ease-out forwards`}}
 background-color: ${(props) => props.theme.pageBg? props.theme.pageBg : 'rgba(237, 240, 241, 0.8)'};
 bottom: 0;
 display: flex;
 justify-content: center;
 left: 0;
 position: fixed;
 right: 0;
 top: 0;
 z-index: 99999;
`;

export const ModalBody = styled.div`
 animation: ${(props) => props.animation && css` ${modalopen} 0.5s ease-out forwards`}}
 background-color: ${(props) => props.theme.modalBg? props.theme.modalBg : '#fff'};
 border-radius: ${(props) => props.theme.modalRadius==='false'? '0px' : '20px'};
 border: ${(props) => props.theme.modalBorder? props.theme.modalBorder : 'none'};
 box-shadow: ${(props) => props.theme.modalShadow? props.theme.modalShadow : 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
 color: ${(props) => props.theme.modalTxt? props.theme.modalTxt : '#000'};
 max-width: 25rem;
 position: relative;
 width: 100%;
`;

export const Close = styled.button`
 background: transparent;
 border: none;
 cursor: pointer;
 position: absolute;
 right: 1rem;
 top: 1rem;
`;

export const Content = styled.div`
 padding: 0.625rem 8%;
 text-align: center;

 p {
   font-weight: bold;
   font-size: 1.2rem;
 }

 img {
   width: clamp(5rem, 6vw, 7rem);
 }
`;