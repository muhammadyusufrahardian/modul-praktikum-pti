import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupsiswaPage } from './signupsiswa.page';

describe('SignupsiswaPage', () => {
  let component: SignupsiswaPage;
  let fixture: ComponentFixture<SignupsiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupsiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
