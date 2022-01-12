import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FilterComponentModule } from '@views/filter/filter.module';
import { TableComponentModule } from '@views/table/table.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          FilterComponentModule,
          TableComponentModule,
        ],
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
