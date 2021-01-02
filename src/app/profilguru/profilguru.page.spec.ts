import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilguruPage } from './profilguru.page';

describe('ProfilguruPage', () => {
  let component: ProfilguruPage;
  let fixture: ComponentFixture<ProfilguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
