import { Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base.component';

@Component({
    selector: 'app-input-textarea',
    templateUrl: './input-textarea.component.html',
    styleUrls: ['../../../../../styles/input.scss'],
})
export class InputTextAreaComponent extends InputBaseComponent {
    @Input() minRows = 1;
    @Input() maxRows = 3;
}
