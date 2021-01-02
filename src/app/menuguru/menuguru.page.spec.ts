import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuguruPage } from './menuguru.page';

describe('MenuguruPage', () => {
  let component: MenuguruPage;
  let fixture: ComponentFixture<MenuguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
