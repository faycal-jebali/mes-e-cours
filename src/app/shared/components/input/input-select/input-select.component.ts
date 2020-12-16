import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { SelectItem } from '../../../models/select-item';
import { InputBaseComponent } from '../input-base.component';

@Component({
    selector: 'app-input-select',
    templateUrl: './input-select.component.html',
    styleUrls: ['../../../../../styles/input.scss'],
})
export class InputSelectComponent extends InputBaseComponent {
    @Input() values: SelectItem[];
}
