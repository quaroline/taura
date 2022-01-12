import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpHomeComponent } from './wp-home.component';

describe('WpHomeComponent', () => {
  let component: WpHomeComponent;
  let fixture: ComponentFixture<WpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
