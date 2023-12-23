import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerCreateUpdateDto, CustomerDto, CustomerService } from '@proxy';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  selectedEntry: CustomerDto;
  customerItems: CustomerDto[];
  entryForm: FormGroup;
  isPaidOptions: string[] = ['Paid', 'Not Paid'];


  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entry: CustomerDto },
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.selectedEntry = { ...data.entry };
    this.entryForm = this.fb.group({
      input1: [this.selectedEntry.name],
      input2: [this.selectedEntry.phoneNumber],
      input3: [this.selectedEntry.accountNumber],
      input4: [this.selectedEntry.isPaid],
      input5: [this.selectedEntry.debtAmount],
      input6: [this.selectedEntry.isActive],
    });
  }

  ngOnInit(): void {}

  onUpdate(): void {
    const formData: CustomerCreateUpdateDto = {
      name: this.entryForm.get('input1')!.value,
      phoneNumber: this.entryForm.get('input2')!.value,
      accountNumber: this.entryForm.get('input3')!.value,
      isPaid: this.entryForm.get('input4')!.value,
      debtAmount: this.entryForm.get('input5')!.value,
      isActive: this.entryForm.get('input6')!.value,
    };

    this.customerService
      .update(this.selectedEntry.id, formData)
      .subscribe(
        () => {
          this.dialogRef.close();
          this.refreshCustomerList();
        },
        (error) => {
          console.error('Error updating entry', error);
        }
      );
  }

  onClose(): void {
    this.dialogRef.close();
  }

  refreshCustomerList(): void {
    this.customerService.getAll().subscribe((response) => {
      this.customerItems = response;
    });
}
}
