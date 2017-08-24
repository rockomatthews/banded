import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOldComponent } from './user-old.component';

describe('UserOldComponent', () => {
  let component: UserOldComponent;
  let fixture: ComponentFixture<UserOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
