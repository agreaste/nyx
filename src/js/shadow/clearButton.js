import "../../styles/clearButton.css";

class ClearButton extends HTMLButtonElement {
    constructor() {
        const self = super();
        this.shadowBuilder(self);
    }

    shadowBuilder (root) {
        const attributes = root.getAttributeNames().reduce((acc, val) => ({
            [val]: root.getAttribute(val),
            ...acc
        }), {});

        const {value} = attributes;

        root.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById(value).value = null;
        });
    }
}

export default ClearButton;