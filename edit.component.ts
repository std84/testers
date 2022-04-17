import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BasicObj } from '../_modal/basicObj';
import { HttpCallService } from '../_services/httpcall.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  basicForm: FormGroup;
  id:number;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private pageService: HttpCallService) {   
    this.basicForm  =  new FormGroup({
    color: new FormControl(),
    text: new FormControl()
  }); 
  this.id=0;
  this.route.params.subscribe((params: Params) => {
     
    this.id = +params['id'];
   
   
    this.initForm();
  });
 }

  ngOnInit(): void {
    if(this.id>0){
    
      this.pageService.getDataById(this.id).subscribe ((data: BasicObj) => {
     debugger;
        this.basicForm= new FormGroup({
          id: new FormControl(data.id, Validators.required),
          color: new FormControl(data.color, Validators.required),
          text: new FormControl(data.text, Validators.required),
         Boolean:new FormControl(true, Validators.required),
        })
      });
      
    }
  }
  get color(): FormControl {
    const res = this.basicForm.get('color') as FormControl;
    return res;
  }
  get text(): FormControl {
    const res = this.basicForm.get('text') as FormControl;
    return res;
  }
  onSubmit() {
 
    if (this.id>0) {
      debugger;
      const formvalue  = this.basicForm.value;
      this.pageService.updateData(formvalue , this.id).subscribe(
       response => {
          console.log("PUT call in error", response);
      },
    
      );
    } else {
      this.pageService.addData(this.basicForm.value).subscribe(
        response => {
           console.log("PUT call in error", response);
       },
     
       );
    }
   
  }
  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeIngredients = this.fb.array([]);
    let recipeSteps = this.fb.array([]);

    
    
    this.basicForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      color: new FormControl("", Validators.required),
      text: new FormControl("", Validators.required),boolean:new FormControl(true, Validators.required),
    });
  }
}
