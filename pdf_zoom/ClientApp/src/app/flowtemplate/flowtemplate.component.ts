import { Component, OnInit } from '@angular/core';
import { FlowTemplateService } from './flowtemplate.service';

@Component({
    selector: 'app-flowtemplate',
    templateUrl: './flowtemplate.component.html',
    styleUrls: ['./flowtemplate.component.scss']
})
export class FlowTemplateComponent implements OnInit {
    pdfSrc: string = '';
    pdf: any;
    showModal: boolean = false;
    data: any[] = [];
    label_detail: any;
    currentIndex: number = -1;
    isShowpdf: boolean = false;
    isShowprev: boolean = false;
    isShownxt: boolean = true;

    constructor(private flowTemplateService: FlowTemplateService) { }

    ngOnInit() {
        this.data = this.flowTemplateService.getData();
        this.loadnxtdata();
    }

    loadprevdata() {
        this.currentIndex--;
        this.updateDataAndControls();
    }

    loadnxtdata() {
        this.currentIndex++;
        this.updateDataAndControls();
    }

    private updateDataAndControls() {
        this.isShowprev = this.currentIndex > 0;
        this.isShownxt = this.currentIndex < this.data.length - 1;

        if (this.data[this.currentIndex]) {
            this.pdfSrc = this.data[this.currentIndex].pdfSrc;
            this.label_detail = this.data[this.currentIndex].labelpos;
            this.isShowpdf = true;
        }
    }
}
