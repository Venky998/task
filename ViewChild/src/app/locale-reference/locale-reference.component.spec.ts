import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleReferenceComponent } from './locale-reference.component';

describe('LocaleReferenceComponent', () => {
  let component: LocaleReferenceComponent;
  let fixture: ComponentFixture<LocaleReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
