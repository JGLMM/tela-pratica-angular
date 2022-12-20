import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetFrenteEstrategicaComponent } from './det-frente-estrategica.component';

describe('DetFrenteEstrategicaComponent', () => {
  let component: DetFrenteEstrategicaComponent;
  let fixture: ComponentFixture<DetFrenteEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetFrenteEstrategicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetFrenteEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
