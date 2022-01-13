import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { RandomUsersService } from '@services/random-users/random-users.service';
import { TableComponent } from './table.component';

class RandomUserNationalitiesService {}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let randomUsersService = new RandomUserNationalitiesService();
  beforeEach(
    waitForAsync(() => {
      {
        TestBed.configureTestingModule({
          imports: [ScrollingModule, SpinnerComponentModule],
          declarations: [TableComponent],
          providers: [
            {
              provide: RandomUsersService,
              useValue: randomUsersService,
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
