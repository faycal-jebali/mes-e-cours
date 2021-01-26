import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { SelectItem } from '../../../../models/select-item';
import { InputBaseComponent } from '../../input-base.component';

@Component({
    selector: 'app-input-dropdown-filter',
    templateUrl: './input-dropdown-filter.component.html',
    styleUrls: ['./input-dropdown-filter.component.scss'],
})
export class InputDropdownFilterComponent extends InputBaseComponent implements OnInit {
    moveTheList = '';
    formGroup: FormGroup;
    detectChangesIn = null;
    @Input() typeData = '';
    @Input() values: SelectItem[];
    // Subject that emits when the component has been destroyed.
    protected onDestroySubject = new Subject<void>();

    constructor(
        private formBuilder: FormBuilder,
        private cdRef: ChangeDetectorRef,
    ) {
        super();
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            firstBox: [this.control.value, Validators.required],
            secondBox: [this.control.value, Validators.required],
        });

        this.formGroup.get('firstBox').valueChanges
            .pipe(takeUntil(this.onDestroySubject))
            .subscribe(
                (data: SelectItem) => {
                    this.control.setValue(data);
                    this.detectChangesIn = 'firstBox';
                },
            );

        this.formGroup.get('secondBox').valueChanges
            .pipe(takeUntil(this.onDestroySubject))
            .subscribe(
                (data: SelectItem) => {
                    this.control.setValue(data);
                    this.detectChangesIn = 'secondBox';
                },
            );

        this.control.valueChanges
            .pipe(
                debounceTime(300),
                takeUntil(this.onDestroySubject),
            )
            .subscribe(
                (data: SelectItem) => {
                    if (data) {
                        if (this.detectChangesIn === 'firstBox') {
                            this.formGroup.get('secondBox').setValue(data);
                        }

                        if (this.detectChangesIn === 'secondBox') {
                            this.formGroup.get('firstBox').setValue(data);
                        }
                    }
                    this.detectChangesIn = null;
                },
            );
        this.cdRef.detectChanges();
    }

    sendActionToChild(type) {
        this.moveTheList = type;
        setTimeout(() => {
            this.moveTheList = '';
        }, 0);
    }

    ngOnDestroy() {
        this.onDestroySubject.next();
        this.onDestroySubject.complete();
    }
}
