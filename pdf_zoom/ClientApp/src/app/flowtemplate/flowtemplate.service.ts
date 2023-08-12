import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FlowTemplateService {
    private staticData = [
        {
            page: 1,
            pdfSrc: '../assets/1.pdf',
            labelpos: [{ id: 1, top: '47%', left: '31.8%', width: '35.5%', height: '21%', div_height: '19vw', canvas_top: '-40vw', canvas_left: '-3vw', dyn_scale: 2.4 },
                { id: 2, top: '34.5vw', left: '31vw', width: '37vw', height: '11vw', div_height: '20vw', canvas_top: '-60vw', canvas_left: '-3vw', dyn_scale: 2.4 }]
        },       

        {
            page: 2,
            pdfSrc: '../assets/2.pdf',
            labelpos: [{ id: 1, top: '1.6vw', left: '32vw', width: '37vw', height: '19vw', div_height: '27vw', canvas_top: '-1.5vw', canvas_left: '4vw', dyn_scale:1.8 },
                { id: 2, top: '21.5vw', left: '32vw', width: '37vw', height: '10vw', div_height: '18vw', canvas_top: '-34vw', canvas_left: '-2vw', dyn_scale: 2.2 },
                { id: 3, top: '32.5vw', left: '32vw', width: '37vw', height: '13.5vw', div_height: '24vw', canvas_top: '-52vw', canvas_left: '-1vw', dyn_scale: 2.2 }]

        },
        {
            page: 3,
            pdfSrc: '../assets/3.pdf',
            labelpos: [{ id: 1, top: '4vw', left: '31vw', width: '37vw', height: '19vw', div_height: '30vw', canvas_top: '-5.5vw', canvas_left: '2vw', dyn_scale: 2 },
                { id: 2, top: '24.5vw', left: '31vw', width: '37vw', height: '21vw', div_height: '28vw', canvas_top: '-30.5vw', canvas_left: '6vw', dyn_scale: 1.75 }]
        },
        {
            page: 4,
            pdfSrc: '../assets/4.pdf',
            labelpos: [{ id: 1, top: '4vw', left: '31vw', width: '37vw', height: '10vw', div_height: '15vw', canvas_top: '-5.5vw', canvas_left: '2vw', dyn_scale: 2 },
                { id: 2, top: '15.5vw', left: '32vw', width: '37vw', height: '29vw', div_height: '27vw', canvas_top: '-12.8vw', canvas_left: '13vw', dyn_scale: 1.2 }]
        },
        {
            page: 5,
            pdfSrc: '../assets/5.pdf',
            labelpos: [{ id: 1, top: '4vw', left: '31vw', width: '37vw', height: '10vw', div_height: '30vw', canvas_top: '-5.5vw', canvas_left: '2vw', dyn_scale: 2 },
                { id: 2, top: '15.5vw', left: '32vw', width: '37vw', height: '29vw', div_height: '28vw', canvas_top: '-30.5vw', canvas_left: '6vw', dyn_scale: 1.75 }]
        },
        {
            page: 6,
            pdfSrc: '../assets/6.pdf',
            labelpos: [{ id: 1, top: '4vw', left: '31vw', width: '37vw', height: '19vw', div_height: '30vw', canvas_top: '-5.5vw', canvas_left: '2vw', dyn_scale: 2 },
                { id: 2, top: '24.5vw', left: '31vw', width: '37vw', height: '21vw', div_height: '28vw', canvas_top: '-30.5vw', canvas_left: '6vw', dyn_scale: 1.75 }]
        }
       
    ];
 
    constructor() { }

    getData() {
        return this.staticData;
    }
}
