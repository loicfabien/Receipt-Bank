import template from './assist.component.html';

export class AssistComponent {

    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
    }

    /**
     * Display Assist page
     */
    display() {
        this.element.innerHTML = template;
    }

}