import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';
import { By } from '@angular/platform-browser';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponent],
    });
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display tooltip when mouse events mouseenter/mouseleave are triggered', () => {
    expect(
      fixture.debugElement.query(By.css('.ngx-tooltip__content')),
    ).toBeNull();

    fixture.nativeElement
      .querySelector('.ngx-tooltip')
      .dispatchEvent(new Event('mouseenter'));

    expect(
      fixture.debugElement.query(By.css('.ngx-tooltip__content')),
    ).toBeDefined();

    fixture.nativeElement
      .querySelector('.ngx-tooltip')
      .dispatchEvent(new Event('mouseleave'));

    expect(
      fixture.debugElement.query(By.css('.ngx-tooltip__content')),
    ).toBeNull();
  });
});
