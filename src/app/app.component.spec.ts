import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to the'
    );
  });
});

describe('Should test the button click event', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should', fakeAsync(() => {
    jest.spyOn(component, 'handleClick');

    component.handleClick({ title: 'test-title', icon: 'undefined' });

    fixture.whenStable().then(() => {
      expect(component.handleClick).toHaveBeenCalled();
    });
  }));
});
