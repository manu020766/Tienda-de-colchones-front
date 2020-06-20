import { Component, OnInit, Inject} from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.less']
})
export class OkDialogComponent implements OnInit {
  title: string
  message: string
  constructor(public dialogRef: MatDialogRef<OkDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  public closeDialog = () => {
    this.dialogRef.close();
  }

}
