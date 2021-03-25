export class Receipt {

    constructor(){

        /**
         * @type {String}
         */
        this.companyName = null;

        /**
         * @type {String}
         */
        this.address = null;

        /**
         * @type {String}
         */
        this.siren = null;

        /**
         * @type {Date}
         */
        this.date = null;

        /**
         * @type {String}
         */
        this.client = null;

        /**
         * @type {Number}
         */
        this.exclTax = null;

        /**
         * @type {Number}
         */
        this.inclTax = null;

        /**
         * @type {Number}
         */
        this.vatRate = null;

        /**
         * @type {Number}
         */
        this.vat = null;

        /**
         * @type {String}
         */
        this.image = null;
    }
}