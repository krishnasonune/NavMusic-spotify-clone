import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlayoutComponent } from './custlayout.component';

describe('CustlayoutComponent', () => {
  let component: CustlayoutComponent;
  let fixture: ComponentFixture<CustlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
