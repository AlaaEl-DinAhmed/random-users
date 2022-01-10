import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { Subscription } from 'rxjs';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let randomUserNationalitiesService: RandomUserNationalitiesService;

  beforeEach(
    waitForAsync(() => {
      {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, SpinnerComponentModule],
          declarations: [TableComponent],
          providers: [RandomUserNationalitiesService],
        }).compileComponents();
        randomUserNationalitiesService = TestBed.inject(
          RandomUserNationalitiesService
        );
      }
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRandomUsers on the component creation', () => {
    const spy = spyOn(component, 'getRandomUsers');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should remove random User subscription on the component destroyed', () => {
    component.randomUserSub = new Subscription();
    const spy = spyOn(component.randomUserSub, 'unsubscribe');

    component.ngOnDestroy();

    expect(spy).toHaveBeenCalled();
  });
});
