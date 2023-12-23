import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerCreateUpdateDto, CustomerService } from '@proxy';

@Component({
  selector: 'addCustomer-dialog',
  templateUrl: './addCustomer-dialog.component.html',
  styleUrls: ['./addCustomer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  entryForm: FormGroup;
  isPaidOptions: string[] = ['Paid', 'Not Paid'];
  
  constructor(
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entry: CustomerCreateUpdateDto },
    private customerService: CustomerService,  private fb: FormBuilder) {
    this.entryForm = this.fb.group({
      input1: [''],
      input2: [''],
      input3: [''],
      input4: [''],
      input5: [''],
      input6: [''],
    });
   }

  ngOnInit(): void {
  }

  onAdd(): void {
    const formData: CustomerCreateUpdateDto = {
      name: this.entryForm.get('input1')!.value,
      phoneNumber: this.entryForm.get('input2')!.value,
      accountNumber: this.entryForm.get('input3')!.value,
      isPaid: this.entryForm.get('input4')!.value,
      debtAmount: this.entryForm.get('input5')!.value,
      isActive: this.entryForm.get('input6')!.value,
    };
  
    this.customerService
      .create(formData)
      .subscribe(
        () => {
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating entry', error);
        }
      );
  }
  
  

  onClose(): void {
    this.dialogRef.close();
  }

  
}
