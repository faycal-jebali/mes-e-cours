import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { SelectItem } from '../../../../models/select-item';
import { InputBaseComponent } from '../../input-base.component';


@Component({
    selector: 'app-input-simple-filter',
    templateUrl: './input-simple-filter.component.html',
    styleUrls: ['./input-simple-filter.component.scss'],
})
export class InputSimpleFilterComponent extends InputBaseComponent implements OnInit, OnChanges, OnDestroy {
    @Input() values: SelectItem[];
    @Input() activeSearch = true;
    
    @Input() typeData = ''; // Default Data
    @Input() dropdown = false;
    @Input() principalBox = true;
    @Input() uniqueOption = false;
    @Input() doAction = '';
    @Input() pageSize = 10;
    minCharSearch = 3;
    selectedIds = [];
    searchBox = new FormControl();
    listBox = new FormControl();
    filteredOptions = new BehaviorSubject<SelectItem[]>(null);
    // Subject that emits when the component has been destroyed.
    protected onDestroySubject = new Subject<void>();

    constructor() {
        super();
    }

    ngOnInit() {
        this.initData();
        this.searchBox.valueChanges
            .pipe(
                debounceTime(300),
                takeUntil(this.onDestroySubject),
            )
            .subscribe(
                () => {
                    this.filterOptions();
                },
            );

        this.control.valueChanges
            .pipe(takeUntil(this.onDestroySubject))
            .subscribe(
                () => {
                    this.filterOptions();
                },
            );
    }

    initData() {
        this.getDataByType(null, '');
    }

    /**
     * Get Data By Type
     * @param queryPagination
     * @param search
     */
    getDataByType(queryPagination, search) {
        this.getDefautData(search);
    }

    /**
     * get default data form @Input() values
     * @param search
     */
    getDefautData(search) {
        if (!search) {
            this.filteredOptions.next(this.refreshData(this.values, -1));
        } else {
            const listFiltered = this.values.filter(op => op.name.toLowerCase().indexOf(search) > -1);
            this.filteredOptions.next(this.refreshData(listFiltered, -1));
        }
        return this.values;
    }

    refreshData(data, limit) {
        let result = data;
        if (this.dropdown) {
            if (this.principalBox) {
                result = result.filter(op => !this.control.value.includes(op.id)).slice();
            } else {
                result = result.filter(op => this.control.value.includes(op.id)).slice();
            }
        }

        if (limit >= 0) {
            result = result.slice(0, this.pageSize);
        }

        return result;
    }

    ngOnChanges(changes: SimpleChanges) {
        // detect actions form parent
        if (changes.doAction && changes.doAction.currentValue !== '') {
            switch (changes.doAction.currentValue) {
                case 'addAll':
                    this.addAll();
                    break;

                case 'addSelectList':
                    this.addSelectList();
                    break;

                case 'removeAll':
                    this.removeAll();
                    break;

                case 'removeSelectList':
                    this.removeSelectList();
                    break;
            }
        }
    }

    filterOptions() {
        let search = this.searchBox.value;
        if (!search || search.length < this.minCharSearch) {
            this.initData();
            return;
        } else {
            search = search.toLowerCase();
        }
        this.getDataByType(null, search);
    }

    addAll() {
        if (this.principalBox) {
            const currentValue = this.control.value;
            let search = this.searchBox.value;
            if (!search || search.length < this.minCharSearch) {
                this.control.setValue(currentValue.concat(this.refreshData(this.values, -1).map(op => op.id)));
                return;
            } else {
                search = search.toLowerCase();
            }
            const listFiltered = this.values.filter(op => op.name.toLowerCase().indexOf(search) > -1);
            this.control.setValue(
                currentValue.concat(this.refreshData(listFiltered, -1).map(op => op.id)),
            );
            this.resetSelectedElem();
        }
    }

    addSelectList() {
        if (this.principalBox) {
            const currentValue = this.control.value.concat(this.selectedIds);
            this.control.setValue(currentValue);
            this.resetSelectedElem();
        }
    }

    removeAll() {
        if (!this.principalBox) {
            const currentValue = this.control.value;
            let search = this.searchBox.value;
            if (!search || search.length < this.minCharSearch) {
                // Delete all List in Selected BOX
                this.control.setValue([]);
                return;
            } else {
                search = search.toLowerCase();
            }

            const listFiltered = this.values.filter(op => op.name.toLowerCase().indexOf(search) > -1);
            // Delete only List of search in Selected BOX
            this.control.setValue(
                currentValue.filter(
                    (item: number) => !this.refreshData(listFiltered, -1).map(op => op.id).includes(item),
                ),
            );
            this.resetSelectedElem();
        }
    }

    removeSelectList() {
        if (!this.principalBox) {
            const currentValue = this.control.value;
            console.log('currentValue :: ', currentValue);
            const newValue = currentValue.filter((op: number) => !this.selectedIds.includes(op));
            this.control.setValue(newValue);
            this.resetSelectedElem();
        }
    }

    /**
     * update Selected List
     * @param option
     * @param event
     */
    updateCheckedOptions(option, event) {
        // unique Value must be saved
        if (this.uniqueOption && !this.dropdown) {
            this.control.setValue([option.id]);
            this.selectedIds[0] = option.id;
            return;
        }

        if (this.principalBox) {
            if (event.target.checked) {
                if (this.selectedIds.indexOf(option.id) <= -1) {
                    this.selectedIds.push(option.id);
                }
                if (!this.dropdown) {
                    this.control.setValue(this.selectedIds);
                }
            } else {
                const indexOf = this.selectedIds.indexOf(option.id);
                this.selectedIds.splice(indexOf, 1);
                if (!this.dropdown) {
                    this.control.setValue(this.selectedIds);
                }
            }
        } else {
            if (!event.target.checked) {
                this.selectedIds = this.selectedIds.filter(item => item !== option.id);
            } else {
                if (this.selectedIds.indexOf(option.id) <= -1) {
                    this.selectedIds.push(option.id);
                }
            }
        }
    }

    isChecked(id) {
        if (this.principalBox) {
            return this.control.value.includes(id) || (this.selectedIds.includes(id));
        }

        if (!this.principalBox) {
            return !this.control.value.includes(id) || (this.selectedIds.includes(id));
        }
    }

    resetSelectedElem() {
        this.selectedIds = [];
    }

    clearSearch() {
        this.searchBox.setValue('');
    }

    ngOnDestroy() {
        this.onDestroySubject.next();
        this.onDestroySubject.complete();
    }
}
