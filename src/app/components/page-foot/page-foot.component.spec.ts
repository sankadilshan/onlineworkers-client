import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFootComponent } from './page-foot.component';

describe('PageFootComponent', () => {
  let component: PageFootComponent;
  let fixture: ComponentFixture<PageFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
