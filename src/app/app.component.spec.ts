import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomUsersService } from '@services/random-users/random-users.service';
import { FilterComponentModule } from '@views/filter/filter.module';
import { TableComponentModule } from '@views/table/table.module';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';

class RandomUserNationalitiesService {
  genderFilter = new BehaviorSubject('');
  genderFilter$ = this.genderFilter.asObservable();
  natFilter = new BehaviorSubject('');
  natFilter$ = this.natFilter.asObservable();
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let randomUsersService = new RandomUserNationalitiesService();
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          FilterComponentModule,
          TableComponentModule,
        ],
        declarations: [AppComponent],
        providers: [
          {
            provide: RandomUsersService,
            useValue: randomUsersService,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFilterValues method on the component creation', () => {
    const spy = spyOn(component, 'getFilterValues');

    component.getFilterValues();

    expect(spy).toHaveBeenCalled();
  });

  it('should get gender filtered values', () => {
    randomUsersService.genderFilter.next('male');

    component.getFilterValues();

    expect(component.genderFilteredValues).toBe('male');
  });

  it('should get nationalities filtered values', () => {
    randomUsersService.natFilter.next('au');

    component.getFilterValues();

    expect(component.natFilteredValues).toBe('au');
  });

  it('should call downloadUrl getter', () => {
    component.genderFilteredValues = 'male';
    component.natFilteredValues = 'au';
    const expectedResult = `${environment.baseUrl}?format=csv&gender=male&nat=au`;

    component.downloadUrl;

    expect(component.downloadUrl).toBe(expectedResult);
  });
});
