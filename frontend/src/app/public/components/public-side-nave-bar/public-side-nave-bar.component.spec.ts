import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSideNaveBarComponent } from './public-side-nave-bar.component';

describe('PublicSideNaveBarComponent', () => {
  let component: PublicSideNaveBarComponent;
  let fixture: ComponentFixture<PublicSideNaveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSideNaveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSideNaveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
