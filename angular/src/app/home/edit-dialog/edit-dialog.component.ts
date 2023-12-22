import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entry: CustomerDto },
    private customerService: CustomerService,
  ) {
    this.selectedEntry = { ...data.entry };
  }

  ngOnInit(): void {}

  onUpdate(): void {
    this.customerService
      .update(this.selectedEntry.id, this.selectedEntry)
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
