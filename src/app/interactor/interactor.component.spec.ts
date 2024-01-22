import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractorComponent } from './interactor.component';

describe('InteractorComponent', () => {
  let component: InteractorComponent;
  let fixture: ComponentFixture<InteractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
