import { Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base.component';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['../../../../../styles/input.scss'],
})
export class InputTextComponent extends InputBaseComponent {
    @Input() type = 'text';
    @Input() step = '';
}
