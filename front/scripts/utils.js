function createElement(elemementType, className) {
    const element = document.createElement(elemementType);
    element.classList.add(className);

    return element;
}

module.exports = createElement;