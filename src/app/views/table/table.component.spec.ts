import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { RANDOM_USERS } from '@mock/random-users';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { of } from 'rxjs';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let randomUserNationalitiesService = jasmine.createSpyObj(
    'randomUserNationalitiesService',
    {
      users$: of([RANDOM_USERS]),
    },
    ['users$']
  );

  beforeEach(
    waitForAsync(() => {
      {
        TestBed.configureTestingModule({
          imports: [SpinnerComponentModule],
          declarations: [TableComponent],
          providers: [
            {
              provide: RandomUserNationalitiesService,
              useValue: randomUserNationalitiesService,
            },
          ],
        }).compileComponents();
      }
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
