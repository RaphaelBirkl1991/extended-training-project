import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhinoComponent } from './rhino.component';

describe('RhinoComponent', () => {
  let component: RhinoComponent;
  let fixture: ComponentFixture<RhinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
