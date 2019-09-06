import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  @Input() productData = { prod_name:'Test Title', prod_desc: 'Test Descrip', prod_price: 160 };
  formationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formationForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      promotionPrice: ['', Validators.required],
      categoriesId: ['', Validators.required],      
    });
  }

  addProduct() {
    this.rest.addProduct(this.formationForm.value).subscribe(
      (result) => {
        console.log('AddPrd OK : ', result);
      // this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log('AddPrd Error :', err);
    });
  }

}