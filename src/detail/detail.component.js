import template from './detail.component.html';

export class DetailComponent {
    
    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
    }

    /**
     * Display Detail page
     */
    display() {
        this.element.innerHTML = template;
    }

}