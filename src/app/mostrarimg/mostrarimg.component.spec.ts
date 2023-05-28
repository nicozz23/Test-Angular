import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarimgComponent } from './mostrarimg.component';

describe('MostrarimgComponent', () => {
  let component: MostrarimgComponent;
  let fixture: ComponentFixture<MostrarimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarimgComponent]
    });
    fixture = TestBed.createComponent(MostrarimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
