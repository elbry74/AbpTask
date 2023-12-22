import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDto, CustomerService } from '@proxy';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { AddCustomerDialogComponent } from './addCustomer-dialog/addCustomer-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  customerItems: CustomerDto[];

  constructor(
    private customerService: CustomerService,
    private toasterService: ToasterService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.customerService.getAll().subscribe((response) => {
      this.customerItems = response;
    });
  }

  openEditDialog(id: number): void {
    this.customerService.get(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(EditDialogComponent, {
          width: '800px',
          data: { entry: data },
        });

        dialogRef.afterClosed().subscribe(() => {
          this.refreshCustomerList();
        });
      },
      (error) => {
        console.error('Error fetching customer data', error);
      }
    );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width: '800px',
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.refreshCustomerList();
    });
  }


  deleteEntry(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this entry?');

    if (confirmation) {
      this.customerService.delete(id).subscribe(
        () => {
          this.refreshCustomerList();
        },
        (error) => {
          console.error('Error deleting entry', error);
        }
      );
    }
  }

  toggleActive(id: number, isActive: boolean): void {
    this.customerService.toggleActive(id).subscribe(() => {
      this.refreshCustomerList();
    });
  }

  refreshCustomerList(): void {
    this.customerService.getAll().subscribe((response) => {
      this.customerItems = response;
    });


  }
}