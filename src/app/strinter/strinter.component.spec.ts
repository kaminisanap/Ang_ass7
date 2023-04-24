import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrinterComponent } from './strinter.component';

describe('StrinterComponent', () => {
  let component: StrinterComponent;
  let fixture: ComponentFixture<StrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
