import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallNotesComponent } from './getall-notes.component';

describe('GetallNotesComponent', () => {
  let component: GetallNotesComponent;
  let fixture: ComponentFixture<GetallNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
