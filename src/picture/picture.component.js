import { CameraComponent } from '../camera/camera.component';
import { NewDataComponent } from '../new-data/new-data.component';
import { PictureService } from '../shared/services/picture.service';
import template from './picture.component.html';

export class PictureComponent {
  
    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
    }

    /**
     * Display the Picture page
     */
    display() {
        this.element.innerHTML = template;
        const btnValidate = document.querySelector('.valid');
        const btnRefute = document.querySelector('.delete');
        const img = document.querySelector('img');
        img.src = PictureService.getPicture();
        btnValidate.addEventListener("click", () => {
            this.validatePicture();
        });
        btnRefute.addEventListener("click", () => {
            this.displayCamera();
        });
    }

    /**
     * Validate the picture
     */
    validatePicture() {
        this.displayNewData();
    }

    /**
     * Display NewData page
     */
    displayNewData() {
        new NewDataComponent(this.element);
    }

    /**
     * Display Camera page
     */
    displayCamera() {
        new CameraComponent(this.element);
    }

};