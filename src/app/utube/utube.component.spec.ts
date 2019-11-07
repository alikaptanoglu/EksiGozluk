import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtubeComponent } from './utube.component';

describe('UtubeComponent', () => {
  let component: UtubeComponent;
  let fixture: ComponentFixture<UtubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
