import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkeyComponent } from './donkey.component';

describe('DonkeyComponent', () => {
  let component: DonkeyComponent;
  let fixture: ComponentFixture<DonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
