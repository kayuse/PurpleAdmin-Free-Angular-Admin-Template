import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymneditComponent } from './hymnedit.component';

describe('HymneditComponent', () => {
  let component: HymneditComponent;
  let fixture: ComponentFixture<HymneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HymneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HymneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
