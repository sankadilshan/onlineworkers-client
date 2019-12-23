import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrationComponent } from './page-registration.component';

describe('PageRegistrationComponent', () => {
  let component: PageRegistrationComponent;
  let fixture: ComponentFixture<PageRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
