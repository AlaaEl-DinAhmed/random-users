import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './dropdown.component';

describe('dropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      providers: [MatSelectModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dropdown component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit dropdown value', () => {
    component.formControlName = new FormControl();
    component.formControlName.setValue('male');
    const spy = spyOn(component.emitValues, 'emit');

    component.change();

    expect(spy).toHaveBeenCalledWith(component.formControlName.value);
  });
});
