"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalWrapper = exports.ModalBody = exports.Content = exports.Close = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * fade in keyframes
 */
const modalopen = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n from { opacity: 0; transform: translateY(-200px); }\n to { opacity: 1; }\n"])));
const fadeIn = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n from { opacity: 0; }\n to   { opacity: 1; }\n"])));
/**
* CSS for the component using styled.components
*/

const ModalWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n width: 100%;\n height: 100vh;\n align-items: center;\n animation: ", "}\n background-color: ", ";\n bottom: 0;\n display: flex;\n justify-content: center;\n left: 0;\n position: fixed;\n right: 0;\n top: 0;\n z-index: 1;\n"])), props => props.animation && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([" ", " 0.5s ease-out forwards"])), fadeIn), props => props.theme.pageBg ? props.theme.pageBg : 'rgba(237, 240, 241, 0.8)');

exports.ModalWrapper = ModalWrapper;

const ModalBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n animation: ", "}\n background-color: ", ";\n border-radius: ", ";\n border: ", ";\n box-shadow: ", ";\n color: ", ";\n max-width: 25rem;\n position: relative;\n width: 100%;\n"])), props => props.animation && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([" ", " 0.5s ease-out forwards"])), modalopen), props => props.theme.modalBg ? props.theme.modalBg : '#fff', props => props.theme.modalRadius === 'false' ? '0px' : '20px', props => props.theme.modalBorder ? props.theme.modalBorder : 'none', props => props.theme.modalShadow ? props.theme.modalShadow : 'rgba(0, 0, 0, 0.35) 0px 5px 15px', props => props.theme.modalTxt ? props.theme.modalTxt : '#000');

exports.ModalBody = ModalBody;

const Close = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n background: transparent;\n border: none;\n cursor: pointer;\n position: absolute;\n right: 1rem;\n top: 1rem;\n"])));

exports.Close = Close;

const Content = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n padding: 0.625rem 8%;\n text-align: center;\n\n p {\n   font-weight: bold;\n   font-size: 1.2rem;\n }\n\n img {\n   width: clamp(5rem, 6vw, 7rem);\n }\n"])));

exports.Content = Content;