import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ComponentsModule} from './components.module';
import {ScullyContentComponent} from './scully-content/scully-content.component';

describe('ComponentsModule', () => {
  let fixture: ComponentFixture<TestComponent>;
  let contentComponent: ScullyContentComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), ComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('exports ScullyContentComponent', () => {
    contentComponent = fixture.componentInstance.contentComponent;

    expect(contentComponent instanceof ScullyContentComponent).toBe(true);
  });
});

@Component({
  selector: 'lib-test',
  template: '<scully-content></scully-content>',
})
class TestComponent {
  @ViewChild(ScullyContentComponent, {static: true})
  contentComponent: ScullyContentComponent;
}
