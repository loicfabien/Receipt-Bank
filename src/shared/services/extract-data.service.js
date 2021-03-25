import Tesseract from 'tesseract.js';

export class ExtractData {

    constructor(){}

    static extractData(img) {
        return Tesseract.recognize(
            './images/modele-de-facture.jpg',
            'fra',
            {
                logger: m => console.log(m)
            }
        );
    }

    static getInclTaxFromText(text) {
        const patternInclTax = /total([\s\S]*?)\€/ig;
        const patternDigit = /\d+/ig;
        const inclTaxArray = text.match(patternInclTax);
        let inclTax = null;
        inclTaxArray.forEach((element) => {
            inclTax = element.match(patternDigit).join('.');
        });
        return inclTax;
    }

}