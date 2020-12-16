import { EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export abstract class InputBaseComponent {
    @Input() control: FormControl;
    @Input() name?: string;
    @Input() hint?: string;
    @Input() labelId?: string;
    @Input() disabled?: boolean = false;
    @Input() placeholder?: string;

}
