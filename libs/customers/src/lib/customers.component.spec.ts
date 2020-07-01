import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOMERS_CONFIG } from '@example-angular-dynamic-environment/config';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      providers: [
        {
          provide: CUSTOMERS_CONFIG,
          useValue: {
            enabled: true,
            url: 'http://test-api',
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
