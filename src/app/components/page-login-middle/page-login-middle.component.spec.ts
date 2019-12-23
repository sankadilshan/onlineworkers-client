import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginMiddleComponent } from './page-login-middle.component';

describe('PageLoginMiddleComponent', () => {
  let component: PageLoginMiddleComponent;
  let fixture: ComponentFixture<PageLoginMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
