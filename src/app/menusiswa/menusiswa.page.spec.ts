import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenusiswaPage } from './menusiswa.page';

describe('MenusiswaPage', () => {
  let component: MenusiswaPage;
  let fixture: ComponentFixture<MenusiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenusiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
