import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpServicosComponent } from './wp-servicos.component';

describe('WpServicosComponent', () => {
  let component: WpServicosComponent;
  let fixture: ComponentFixture<WpServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
