import { Video } from "../models/video.model";

const video = new Video();

export class VideoService {

    constructor() { }

    static start() {
        return navigator.mediaDevices.getUserMedia(
            {
                audio: false,
                video: { facingMode: { exact: "environment" }}
            }
        );
    }

}