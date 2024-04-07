import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  onCLoseDialog() {}
}
