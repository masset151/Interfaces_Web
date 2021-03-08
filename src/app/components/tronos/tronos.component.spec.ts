import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronosComponent } from './tronos.component';

describe('TronosComponent', () => {
  let component: TronosComponent;
  let fixture: ComponentFixture<TronosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
