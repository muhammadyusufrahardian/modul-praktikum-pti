import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninsiswaPage } from './signinsiswa.page';

describe('SigninsiswaPage', () => {
  let component: SigninsiswaPage;
  let fixture: ComponentFixture<SigninsiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninsiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninsiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
