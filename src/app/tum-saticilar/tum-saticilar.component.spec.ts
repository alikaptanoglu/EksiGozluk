import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumSaticilarComponent } from './tum-saticilar.component';

describe('TumSaticilarComponent', () => {
  let component: TumSaticilarComponent;
  let fixture: ComponentFixture<TumSaticilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumSaticilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumSaticilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
