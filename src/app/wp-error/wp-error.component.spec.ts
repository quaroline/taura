import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpErrorComponent } from './wp-error.component';

describe('WpErrorComponent', () => {
  let component: WpErrorComponent;
  let fixture: ComponentFixture<WpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
