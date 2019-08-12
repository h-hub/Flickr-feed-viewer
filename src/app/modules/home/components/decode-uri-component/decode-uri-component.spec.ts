import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeURIComponentPipe } from './decode-uri-component';

describe('DecodeUriComponentComponent', () => {
  let component: DecodeURIComponentPipe;
  let fixture: ComponentFixture<DecodeURIComponentPipe>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecodeURIComponentPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodeURIComponentPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
