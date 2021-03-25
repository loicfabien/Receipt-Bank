import { Receipt } from '../models/receipt.model';

const receipt = new Receipt();

export class ReceiptService {

    constructor() { }

    static getValue(key) {
        return receipt[key];
    }

    static setValue(key, value) {
        receipt[key] = value;
    }

}