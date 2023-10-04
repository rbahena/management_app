import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaryComponent } from './inventary.component';

describe('InventaryComponent', () => {
  let component: InventaryComponent;
  let fixture: ComponentFixture<InventaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventaryComponent]
    });
    fixture = TestBed.createComponent(InventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
