import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketsService } from "../../../../core/services/tickets-service";
import { MatDialogRef } from "@angular/material/dialog";
import { stringify } from "@angular/compiler/src/util";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export interface AddTicketData {
  description: string,
  date: Date,
  customerName: string,
  priority: string,
  photo: string
}

@Component({
  selector: 'app-add-ticket-dialog',
  templateUrl: './add-ticket-dialog.component.html',
  styleUrls: ['./add-ticket-dialog.component.scss']
})
export class AddTicketDialogComponent implements OnInit {
  public startDate = new Date(2010, 0, 1);
  public form: FormGroup;
  public url: any;
  constructor(private fb: FormBuilder,
              private ticketsService: TicketsService,
              public dialogRef: MatDialogRef<AddTicketDialogComponent>,) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  public onSave(value: AddTicketData): void {
    this.dialogRef.close(value)
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      description: [null, [Validators.required]],
      customerName:  [null, [Validators.required]],
      date: [new Date(), [Validators.required]],
      priority: [null, [Validators.required]],
      photo: [[], Validators.required]
    })
  }

  public readUrl(e: any): void {
    // console.log(e)
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
          this.form.get('photo')?.setValue((<FileReader>event.target).result)
        }
        reader.readAsDataURL(e.target.files[0])
      }
    }


}
