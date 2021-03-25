import template from './import-photo.component.html';

export class ImportPhotoComponent {

    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
    }

    /**
     * Display ImportPhoto page
     */
    display() {
        this.element.innerHTML = template;
    }
    
}