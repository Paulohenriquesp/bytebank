import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransfernciaComponent } from './nova-transferncia.component';

describe('NovaTransfernciaComponent', () => {
  let component: NovaTransfernciaComponent;
  let fixture: ComponentFixture<NovaTransfernciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTransfernciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTransfernciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
