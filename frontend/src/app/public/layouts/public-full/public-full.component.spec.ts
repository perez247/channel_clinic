import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFullComponent } from './public-full.component';

describe('PublicFullComponent', () => {
  let component: PublicFullComponent;
  let fixture: ComponentFixture<PublicFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
