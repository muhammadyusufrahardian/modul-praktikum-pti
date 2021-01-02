import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprofilesiswaPage } from './editprofilesiswa.page';

describe('EditprofilesiswaPage', () => {
  let component: EditprofilesiswaPage;
  let fixture: ComponentFixture<EditprofilesiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilesiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprofilesiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
