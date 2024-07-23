import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode', fakeAsync(() => {
    jest.spyOn(component, 'toggleDarkMode');
    const isDarkBeforeClick = component.isDark;
    component.toggleDarkMode();

    fixture.whenStable().then(() => {
      expect(component.toggleDarkMode).toHaveBeenCalled();
      expect(component.isDark).toBe(!isDarkBeforeClick); // should toggle isDark when clicked
    });
  }));
});
