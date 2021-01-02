import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadwalguruPage } from './jadwalguru.page';

describe('JadwalguruPage', () => {
  let component: JadwalguruPage;
  let fixture: ComponentFixture<JadwalguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadwalguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
