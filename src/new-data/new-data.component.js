import template from './new-data.component.html';
import { PictureService } from '../shared/services/picture.service';
import { DetailComponent } from '../detail/detail.component';
import { ReceiptService } from '../shared/services/receipt.service';
import { ExtractData } from '../shared/services/extract-data.service';

export class NewDataComponent {

    /**
     * @param {HTMLElement} element
     */
    constructor(element) {

        /**
         * @type { HTMLElement }
         */
        this.element = element;

        this.display();
    }

    /**
     * Display NewData page
     */
    display() {
        this.element.innerHTML = template;
        /* const image = document.querySelector('.facture-size');
        const analyse = document.querySelector('.analyse');
        //image.src = PictureService.getPicture();
        analyse.addEventListener("click", () => {
            this.displayDetail();
        }); */
    }

    /**
     * Display Detail page
     */
    displayDetail() {
        ExtractData.extractData()
            .then(({ data: { text } }) => {
                const inclTax = ExtractData.getInclTaxFromText(text);
                ReceiptService.setValue('inclTax', inclTax);
                alert(ReceiptService.getValue('inclTax'));
            });
        //new DetailComponent(this.element);
    }
}

