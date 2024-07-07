import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeiProgettiComponent } from './lista-dei-progetti.component';

describe('ListaDeiProgettiComponent', () => {
  let component: ListaDeiProgettiComponent;
  let fixture: ComponentFixture<ListaDeiProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeiProgettiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeiProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
