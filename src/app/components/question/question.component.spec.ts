import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should set the attempted question when submitted', () => {});

  it('should increment the current question when next is clicked', () => {
    jest.spyOn(component, 'onNext');
    const currentQuestion = component.currentQuestion;
    component.onNext();

    expect(component.currentQuestion).toEqual(currentQuestion + 1);
  });

  it('should reset all tings when user plays again', () => {
    jest.spyOn(component, 'onPlayAgain');

    component.onPlayAgain();

    expect(component.isAttempted).toBe(false);
    expect(component.isSubmitted).toBe(false);
    expect(component.currentQuestion).toBe(0);
  });

  it('should change the isAttempt when clicked', fakeAsync(() => {
    jest.spyOn(component, 'onSubmit');
    const isAttemptedBefore = component.isAttempted;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.isAttempted).toBe(!isAttemptedBefore); // Should change the attempt
  }));

  it('should set the attempted question', fakeAsync(() => {
    jest.spyOn(component, 'handleAttempt');

    let button = fixture.debugElement.nativeElement.querySelector('#attempt');
    button.click('Hyper Trainer Marking Language', 0);
    tick();
    expect(component.handleAttempt).toHaveBeenCalled();
    expect(component.opt1).toBe(true);
  }));
});
