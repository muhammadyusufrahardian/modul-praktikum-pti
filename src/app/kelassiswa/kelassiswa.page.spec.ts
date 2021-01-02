import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KelassiswaPage } from './kelassiswa.page';

describe('KelassiswaPage', () => {
  let component: KelassiswaPage;
  let fixture: ComponentFixture<KelassiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelassiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KelassiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
