/* eslint-disable no-mixed-operators *//* eslint-disable no-func-assign *//* eslint-disable strict */


"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _closeX = require("../components/assets/close-x.svg");

var _styledComponents = require("styled-components");

var _modal = require("./styles/modal");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// svg icon as react component
// styling

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
const Modal = _ref => {
  let {
    closeModal,
    modalTheme,
    logo,
    heading,
    message,
    animation
  } = _ref;
  const activeElement = document.activeElement;

  const handleEscape = () => {
    closeModal();
  };

  const handlekeys = e => {
    e.preventDefault();
  }; // prevent keys: effectively traps focus in modal


  const keyListenersMap = new Map([// map of keyboard listeners
  [27, handleEscape], [9, handlekeys], [18, handlekeys], [37, handlekeys], [38, handlekeys], [39, handlekeys], [40, handlekeys]]);

  const handleKeydown = e => {
    const listener = keyListenersMap.get(e.keyCode); // get the listener corresponding to the pressed key  

    return listener && listener(e); // call the listener if it exists
  };

  (0, _react.useEffect)(() => {
    document.addEventListener('keydown', handleKeydown);
    document.querySelector('.modalButton').focus();
    return () => {
      document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts

      activeElement.focus(); // Return focus to the previously focused element
    };
  });
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: modalTheme
  }, /*#__PURE__*/_react.default.createElement(_modal.ModalWrapper, {
    animation: animation,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal__title"
  }, /*#__PURE__*/_react.default.createElement(_modal.ModalBody, {
    animation: animation
  }, /*#__PURE__*/_react.default.createElement(_modal.Close, {
    "aria-label": "Close",
    className: "modalButton",
    onClick: () => closeModal()
  }, /*#__PURE__*/_react.default.createElement(_closeX.ReactComponent, {
    fill: modalTheme.modalBtnColor,
    stroke: modalTheme.modalBtnColor
  })), /*#__PURE__*/_react.default.createElement(_modal.Content, null, logo && /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", {
    id: "modal__title"
  }, heading), message && /*#__PURE__*/_react.default.createElement("p", null, message)))));
};

var _default = Modal; // Prototypes

exports.default = _default;
Modal.propTypes = {
  closeModal: _propTypes.default.func.isRequired,
  modalTheme: _propTypes.default.object.isRequired,
  logo: _propTypes.default.string,
  heading: _propTypes.default.string.isRequired,
  message: _propTypes.default.string
};