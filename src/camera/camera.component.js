import template from './camera.component.html';
import { PictureComponent } from '../picture/picture.component';
import { PictureService } from '../shared/services/picture.service';
import { VideoService } from '../shared/services/video.service';

export class CameraComponent {

    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
        //this.activateCamera();
    }

    /**
     * Display Camera page
     */
    display() {
        this.element.innerHTML = template;
        document.querySelector('header').style.visibility = "hidden";

        if (!window.cordova) {
            this.activateCamera();
        } else {
            this.grantPermission();
        }
        const takePicture = document.querySelector('.takePicture');
        takePicture.addEventListener('click', () => {
            this.takePicture();
        }, false);
    }

    /**
     * Active the camera
     */
    activateCamera() {
        //const video = document.querySelector('video');
        const capture = document.querySelector('.cam');
        const video = document.createElement("video");
        VideoService.start().then((stream) => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play().then(() => {
                    capture.appendChild(video);
                });
            };
            /* video.addEventListener('canplay', () => {
                capture.style.visibility = "visible";
            }, false); */
        });
        /* .catch((err) => {
             if ("NotAllowedError" === err.name) {
                const elems = document.querySelector('.modal');
                const modal = M.Modal.init(elems);
                const tryAgain = document.querySelector(".tryAgain");
                const activate = document.querySelector(".activate");
                tryAgain.style.visibility = "visible";
                modal.open();
                activate.addEventListener("click", () => {
                    this.activateCamera();
                }, false);

            }
        }); */
    }

    grantPermission() {
        window.cordova.plugins.diagnostic.requestRuntimePermission(
            (status) => {
                switch (status) {
                    case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                        this.activateCamera();
                        break;
                    case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                        this.reactivate();
                        break;
                    case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                        this.reactivate();
                        break;
                    case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                        this.reactivate();
                        break;
                }
            },
            (error) => {
                alert(error);
            },
            window.cordova.plugins.diagnostic.permission.CAMERA,
        );
    }

    /**
     * Take a picture from the video
     */
    takePicture() {
        const canvas = document.querySelector('canvas');
        const video = document.querySelector('video');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(
            video,
            0,
            0,
            video.videoWidth,
            video.videoHeight);
        PictureService.setPicture(canvas.toDataURL('image/png'));
        this.displayPicture();
    }

    /**
     * Display Picture page
     */
    displayPicture() {
        new PictureComponent(this.element);
    }

    /**
     * Reactive the camera
     */
    reactivate() {
        console.log('reactivate');
        const elems = document.querySelector('.modal');
        const modal = M.Modal.init(elems);
        const tryAgain = document.querySelector(".tryAgain");
        const activate = document.querySelector(".activate");
        tryAgain.style.visibility = "visible";
        modal.open();
        activate.addEventListener("click", () => {
            this.grantPermission();
        }, false);
    }

}