import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {IdleMonitorService} from './idle-monitor.service';

describe('IdleMonitorService', () => {
  function latestDispatchedEvent(): Event | undefined {
    const [event] = dispatchEventSpy.calls.mostRecent().args;

    return event;
  }

  let service: IdleMonitorService;
  let dispatchEventSpy: jasmine.Spy;

  beforeEach(() => {
    spyOn(window, 'dispatchEvent');
    dispatchEventSpy = window.dispatchEvent as jasmine.Spy;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(IdleMonitorService);
  });

  describe('Events', () => {
    it('dispatches the initialized event immediately', () => {
      expect(latestDispatchedEvent().type).toBe('AngularInitialized');
    });
  });
});
