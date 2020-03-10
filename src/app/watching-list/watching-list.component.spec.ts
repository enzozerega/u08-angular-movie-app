import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingListComponent } from './watching-list.component';

describe('WatchingListComponent', () => {
  let component: WatchingListComponent;
  let fixture: ComponentFixture<WatchingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
