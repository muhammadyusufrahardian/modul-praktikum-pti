import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadtugassiswaPage } from './uploadtugassiswa.page';

describe('UploadtugassiswaPage', () => {
  let component: UploadtugassiswaPage;
  let fixture: ComponentFixture<UploadtugassiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadtugassiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadtugassiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
