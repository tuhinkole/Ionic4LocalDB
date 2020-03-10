import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  public new_item_form: FormGroup;
  no_Img = true;
  selectedImage:any;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.maxLength(100)
      ])],
      phone: ['' ,[Validators.required, Validators.maxLength(10)]],
    });
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  createItem(){
    console.log("value",this.new_item_form.value);
    this.itemService.createItem(this.new_item_form.value.name, this.new_item_form.value.phone);
    this.new_item_form.reset();
    this.goBack();
  }
  takePicture(){

  }

}
