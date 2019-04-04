import {Injectable} from '@angular/core';
import {
    NgForm,
    FormGroup,
        FormControl,
            Validators,
    FormBuilder} from '@angular/forms'


@Injectable() 
export class ValidatorService {

    public formBeitragGroup: FormGroup = null;
    public max: number = 5000;
    public min: number = 1; // weiter.....
    public max_min_validations = [];

    constructor() {
        var _builder = new FormBuilder();
        this.formBeitragGroup = _builder.group({});
        var max_min_validations = [];
        max_min_validations.push(Validators.max(this.max));
        max_min_validations.push(Validators.min(this.min));
        this.formBeitragGroup.addControl("PriceMaxMinControl"
            ,new FormControl('',Validators.compose(this.max_min_validations)));
    }
}
