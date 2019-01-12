import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGetComponent } from './entry-get.component';

describe('EntryGetComponent', () => {
  let component: EntryGetComponent;
  let fixture: ComponentFixture<EntryGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
