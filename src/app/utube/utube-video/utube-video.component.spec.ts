import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtubeVideoComponent } from './utube-video.component';

describe('UtubeVideoComponent', () => {
  let component: UtubeVideoComponent;
  let fixture: ComponentFixture<UtubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtubeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
