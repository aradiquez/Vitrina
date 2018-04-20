import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Car } from './../../../models/car';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './comparison-modal.component.html'
})

export class ComparisonModalComponent {
  @Input() comparationItems:Car[] = [];

  constructor(public activeModal: NgbActiveModal) {}
}