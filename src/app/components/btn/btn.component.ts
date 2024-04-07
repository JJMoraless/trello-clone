import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typebtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'succes' | 'primary' | 'red' = 'primary';

  getColors() {
    const isSucces = this.color === 'succes';
    const isPrimary = this.color === 'primary';
    const isRed = this.color === 'red';

    return {
      'bg-succes-700': isSucces,
      'hover:bg-succes-800': isSucces,
      'focus:ring-succes-300': isSucces,

      'bg-primary-700': isPrimary,
      'hover:bg-primary-800': isPrimary,
      'focus:ring-primary-300': isPrimary,

      'bg-red-700': isRed,
      'hover:bg-red-800': isRed,
      'focus:ring-red-300': isRed,
    };
  }
}
