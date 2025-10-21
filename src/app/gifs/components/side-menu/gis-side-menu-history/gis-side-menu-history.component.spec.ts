import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisSideMenuHistoryComponent } from './gis-side-menu-history.component';

describe('GisSideMenuHistoryComponent', () => {
  let component: GisSideMenuHistoryComponent;
  let fixture: ComponentFixture<GisSideMenuHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GisSideMenuHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GisSideMenuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
