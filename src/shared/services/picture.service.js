import { Picture } from "../models/picture.model";

const picture = new Picture();

export class PictureService {

    constructor() {}

    static getPicture() {
        return picture.src;
    }

    static setPicture(src) {
        picture.src = src;
    }

}