import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindivComponent } from './maindiv.component';

describe('MaindivComponent', () => {
  let component: MaindivComponent;
  let fixture: ComponentFixture<MaindivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
