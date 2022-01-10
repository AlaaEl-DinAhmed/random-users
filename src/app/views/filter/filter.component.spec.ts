import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let randomUserNationalitiesService: RandomUserNationalitiesService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [FilterComponent],
        providers: [RandomUserNationalitiesService],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
      randomUserNationalitiesService = TestBed.inject(
        RandomUserNationalitiesService
      );
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit gender filter values', () => {
    const filterValue = 'male';
    const spy = spyOn(randomUserNationalitiesService.genderFilter, 'next');

    component.getGenderFilterValues(['male']);

    expect(spy).toHaveBeenCalledWith(filterValue);
  });

  it('should emit nationalities filter values', () => {
    const filterValue = 'AU';
    const spy = spyOn(randomUserNationalitiesService.natFilter, 'next');

    component.getNatFilterValues(['AU']);

    expect(spy).toHaveBeenCalledWith(filterValue);
  });
});
