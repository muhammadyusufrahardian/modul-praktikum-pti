import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TugassiswaPage } from './tugassiswa.page';

describe('TugassiswaPage', () => {
  let component: TugassiswaPage;
  let fixture: ComponentFixture<TugassiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugassiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TugassiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
