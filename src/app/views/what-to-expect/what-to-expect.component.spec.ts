import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToExpectComponent } from './what-to-expect.component';

describe('WhatToExpectComponent', () => {
  let component: WhatToExpectComponent;
  let fixture: ComponentFixture<WhatToExpectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatToExpectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToExpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
