import template from './list-receipt.component.html';

export class ListReceiptComponent {

    constructor(element) {
        this.element = element;
        this.display();
    }

    display() {
        this.element.innerHTML = template;
    }
    
};