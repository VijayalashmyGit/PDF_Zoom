import { Component, ViewChild, ElementRef, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-pdfviewver',
    templateUrl: './pdfviewver.component.html',
    styleUrls: ['./pdfviewver.component.scss']
})
export class PdfviewverComponent {
    @Input() pdfSrc;
    @Input() data;
    @Input() label_detail;
    @ViewChild('pdfViewerContainer', { static: true }) pdfViewerContainer: ElementRef<HTMLDivElement>;
    @ViewChild('cropCanvas', { static: false }) cropCanvas: ElementRef;
    @ViewChild('container', { static: false }) container: ElementRef;

    pdfZoom: number;    
    pdf: any;
    loaded = false;
    showModal = false;
    firstTimeRatio = 0;
    firstTimeWidth = 0;
    firstTimeHeight = 0;

    constructor(public elementRef: ElementRef) { }

    @HostListener('window:resize')
    onResize() {
        this.loaded = false;
        setTimeout(() => {
            this.pageRendered('');
            this.loaded = true;
        }, 500);
    }

    loadComplete(pdf: any) {
        this.pdf = pdf;
    }

    showPage() {
        setTimeout(() => {
            this.loaded = true;
        }, 500);
    }
   
    pageRendered(ev) {
        if (this.firstTimeRatio == 0) {
            this.firstTimeWidth = ev.source.div.clientWidth;
            this.firstTimeHeight = ev.source.div.clientHeight;
            this.firstTimeRatio = this.firstTimeWidth / this.firstTimeHeight;
        }
        const targetHeight = this.pdfViewerContainer.nativeElement.clientHeight;
        const requiredWidth = this.firstTimeRatio * targetHeight;
        const scale = (requiredWidth / this.firstTimeWidth);

        this.pdfZoom = scale - 0.03;       
    }

    openModal(pageNumber: number, pdfdiv_height: string, canvas_top: string, canvas_left: string, dyn_scale) {
        this.showModal = true;
        setTimeout(() => {
            this.renderPageToCanvas(pageNumber, pdfdiv_height, canvas_top, canvas_left, dyn_scale);
        }, 1000);
    }

    closeModal() {
        this.showModal = false;
    }

    renderPageToCanvas(pageNumber: number, pdfdiv_height: string, canvas_top: string, canvas_left: string, dyn_scale) {
        let canvas = this.cropCanvas.nativeElement;
        let context = canvas.getContext('2d');

        this.pdf.getPage(pageNumber).then(page => {
            const viewport = page.getViewport({ scale: dyn_scale });

            canvas.width = 1350;
            canvas.height = 1550;

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
                clip: {
                    x: 0,
                    y: 0,
                    width: 1350,
                    height: 1550
                }
            };

            page.render(renderContext).promise.then(() => {
                this.container.nativeElement.appendChild(canvas);
                this.container.nativeElement.style.height = pdfdiv_height;               
                canvas.style.left = canvas_left;
                canvas.style.top = canvas_top;
            });
        });
    }
}
