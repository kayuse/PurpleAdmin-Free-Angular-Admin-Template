import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnNewComponent } from './hymn-new.component';

describe('HymnNewComponent', () => {
  let component: HymnNewComponent;
  let fixture: ComponentFixture<HymnNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HymnNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HymnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
