import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() formControlName = new FormControl();
  @Input() label = '';
  @Input() values = [''];

  @Output() emitFilterValues = new EventEmitter();

  constructor() {}

  geValue(): void {
    this.emitFilterValues.emit(this.formControlName.value);
  }
}
