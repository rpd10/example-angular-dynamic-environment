import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WIDGETS_CONFIG } from '@example-angular-dynamic-environment/config';
import { WidgetsComponent } from './widgets.component';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetsComponent],
      providers: [
        {
          provide: WIDGETS_CONFIG,
          useValue: {
            enabled: true,
            url: 'http://test-url',
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
