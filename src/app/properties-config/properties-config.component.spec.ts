import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesConfigComponent } from './properties-config.component';

describe('PropertiesConfigComponent', () => {
  let component: PropertiesConfigComponent;
  let fixture: ComponentFixture<PropertiesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
