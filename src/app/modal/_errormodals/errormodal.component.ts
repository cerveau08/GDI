﻿import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ErrormodalService } from './errormodal.service';

@Component({ 
    selector: 'sonatel-pma-errormodal', 
    templateUrl: 'errormodal.component.html', 
    styleUrls: ['errormodal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ErrormodalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private errormodalService: ErrormodalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.errormodalService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.errormodalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}