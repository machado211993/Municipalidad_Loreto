import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoEventoComponent } from './proximo-evento.component';

describe('ProximoEventoComponent', () => {
  let component: ProximoEventoComponent;
  let fixture: ComponentFixture<ProximoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximoEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
