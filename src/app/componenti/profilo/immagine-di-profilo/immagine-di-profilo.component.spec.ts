import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmagineDiProfiloComponent } from './immagine-di-profilo.component';

describe('ImmagineDiProfiloComponent', () => {
  let component: ImmagineDiProfiloComponent;
  let fixture: ComponentFixture<ImmagineDiProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmagineDiProfiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmagineDiProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
