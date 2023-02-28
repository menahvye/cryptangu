import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcryptoComponent } from './selectcrypto.component';

describe('SelectcryptoComponent', () => {
  let component: SelectcryptoComponent;
  let fixture: ComponentFixture<SelectcryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectcryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
