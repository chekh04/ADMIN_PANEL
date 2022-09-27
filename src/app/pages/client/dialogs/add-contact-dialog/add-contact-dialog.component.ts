import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketsService } from "../../../../core/services/tickets-service";
import { MatDialogRef } from "@angular/material/dialog";
import { onlyEmail } from "../../../../helpers/validators/only-email";
import { onlyLatin } from "../../../../helpers/validators/only-latin";

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss']
})
export class AddContactDialogComponent implements OnInit {

  public startDate = new Date(2010, 0, 1);
  public form: FormGroup;
  public url: any;
  constructor(private fb: FormBuilder,
              private ticketsService: TicketsService,
              public dialogRef: MatDialogRef<AddContactDialogComponent>,) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  public onSave(): void {
    this.dialogRef.close(this.form.value)
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      name:  [null, [Validators.required, onlyLatin()]],
      date: [new Date(), [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.required, onlyEmail()]],
      photo: [[], Validators.required]
    })
  }

  public readUrl(e: any): void {
    // console.log(e)
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url)
        this.form.get('photo')?.setValue((<FileReader>event.target).result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

}
