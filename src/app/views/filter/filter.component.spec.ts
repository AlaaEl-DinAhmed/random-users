import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RandomUsersService } from '@services/random-users/random-users.service';
import { BehaviorSubject } from 'rxjs';
import { FilterComponent } from './filter.component';

class RandomUserNationalitiesService {
  genderFilter = new BehaviorSubject('');
  natFilter = new BehaviorSubject('');
}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let randomUsersService = new RandomUserNationalitiesService();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FilterComponent],
        providers: [
          {
            provide: RandomUsersService,
            useValue: randomUsersService,
          },
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit gender filter values', () => {
    const filterValue = 'male';
    const spy = spyOn(randomUsersService.genderFilter, 'next');

    component.emitGenderFilterValues([filterValue]);

    expect(spy).toHaveBeenCalledWith(filterValue);
  });

  it('should emit nationalities filter values', () => {
    const filterValue = 'AU';
    const spy = spyOn(randomUsersService.natFilter, 'next');

    component.emitNatFilterValues([filterValue]);

    expect(spy).toHaveBeenCalledWith(filterValue);
  });
});
