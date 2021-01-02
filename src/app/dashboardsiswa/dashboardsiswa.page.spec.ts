import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardsiswaPage } from './dashboardsiswa.page';

describe('DashboardsiswaPage', () => {
  let component: DashboardsiswaPage;
  let fixture: ComponentFixture<DashboardsiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardsiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
