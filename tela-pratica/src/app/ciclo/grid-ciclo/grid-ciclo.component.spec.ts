import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCicloComponent } from './grid-ciclo.component';

describe('GridCicloComponent', () => {
  let component: GridCicloComponent;
  let fixture: ComponentFixture<GridCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
