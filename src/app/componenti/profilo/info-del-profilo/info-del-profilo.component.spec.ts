import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDelProfiloComponent } from './info-del-profilo.component';

describe('InfoDelProfiloComponent', () => {
  let component: InfoDelProfiloComponent;
  let fixture: ComponentFixture<InfoDelProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDelProfiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDelProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
