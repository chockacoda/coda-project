import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { adminViewComponent } from './admin-view.component';

describe('TodoComponent', () => {
  let component: adminViewComponent;
  let fixture: ComponentFixture<adminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ adminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(adminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
