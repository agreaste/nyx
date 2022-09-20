import './../styles/global.css';
import './../styles/lightInput.css';
import ShadowInput from "./shadow/shadowInput";
import shadowElementUtils from "./shadow/shadowElementUtils";
import ExtendedInput from "./shadow/extendedInput";
import ClearButton from "./shadow/clearButton";

customElements.define('shadow-input', ShadowInput);
shadowElementUtils.defineExtend('shadow-semantic-input', ExtendedInput, 'input');
shadowElementUtils.defineExtend('clear-button', ClearButton, 'button');