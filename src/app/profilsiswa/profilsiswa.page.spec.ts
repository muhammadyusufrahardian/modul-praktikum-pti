import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilsiswaPage } from './profilsiswa.page';

describe('ProfilsiswaPage', () => {
  let component: ProfilsiswaPage;
  let fixture: ComponentFixture<ProfilsiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilsiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilsiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
