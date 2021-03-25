import { ImportPhotoComponent } from '../../import-photo/import-photo.component';
import { AssistComponent } from '../../assist/assist.component';
import template from './navbar.component.html';

export class NavbarComponent {
    
    constructor(element) {
        this.element = element;
        this.display();
    }

    display() {
        this.element.innerHTML = template;
        M.Sidenav.init(document.querySelectorAll(".sidenav"));
        const links = document.querySelectorAll('.link');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                switch(link.getAttribute('data-link')) {
                    case 'import':
                        this.displayImportPhoto();
                        break;
                    case 'assistance':
                        this.displayAssist();
                        break;
                    case 'about':
                        this.displayAboutPage();
                        break;
                }
            });
        });
    }

    static getNavbar() {
        return document.querySelector('header');
    }

    hideNavbar() {
        this.element.style.visibility = "hidden";
    }

    displayImportPhoto() {
        new ImportPhotoComponent(document.querySelector('main'));
    }

    displayAssist() {
        new AssistComponent(document.querySelector('main'));
    }

    displayAboutPage() {
        new AboutComponent(document.querySelector('main'));
    } 

}; 