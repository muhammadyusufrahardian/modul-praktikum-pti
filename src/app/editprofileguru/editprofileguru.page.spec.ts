import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprofileguruPage } from './editprofileguru.page';

describe('EditprofileguruPage', () => {
  let component: EditprofileguruPage;
  let fixture: ComponentFixture<EditprofileguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprofileguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
