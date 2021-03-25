import { CameraComponent } from '../camera/camera.component';
import { DetailComponent } from '../detail/detail.component';
import template from './home.component.html';

export class HomeComponent {

    constructor(element) {

        /**
         * @type {HTMLElement}
         */
        this.element = element;

        this.display();
    }

    /**
     * Display the Home page
     */
    display() {
        this.element.innerHTML = template;
        const btnCamera = document.querySelector('.takePicture');
        const folders = document.querySelectorAll('.folder');
        folders.forEach((folder) => {
            folder.addEventListener("click", () => {
                this.displayDetail();
            });
        });
        btnCamera.addEventListener('click', () => {
            this.displayCamera();
        });
    }

    addFolder() {

    }

    /**
     * Display the Detail page
     */
    displayDetail() {
        new DetailComponent(this.element);
    }

    /**
     * Display the Camera page
     */
    displayCamera() {
        new CameraComponent(this.element);
    }

}