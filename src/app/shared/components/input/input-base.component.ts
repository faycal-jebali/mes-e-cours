import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive()
export abstract class InputBaseComponent {
    @Input() control: FormControl;
    @Input() name?: string;
    @Input() hint?: string;
    @Input() labelId?: string;
    @Input() disabled?: boolean = false;
    @Input() placeholder?: string;

}
