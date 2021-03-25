import "materialize-css";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./shared/navbar/navbar.component";

const display = () => {
    new NavbarComponent(document.querySelector('header'));
    new HomeComponent(document.querySelector('main'));
};

if (window.cordova) {
    document.addEventListener("deviceready", () => { 
        display();
    }, false);
}else{
    display();
}