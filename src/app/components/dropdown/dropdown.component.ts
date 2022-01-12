import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() formControlName = new FormControl();
  @Input() label = '';
  @Input() values = [''];

  @Output() emitValues = new EventEmitter();

  constructor() {}

  change(): void {
    this.emitValues.emit(this.formControlName.value);
  }
}
