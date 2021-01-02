import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihangandaPage } from './pilihanganda.page';

describe('PilihangandaPage', () => {
  let component: PilihangandaPage;
  let fixture: ComponentFixture<PilihangandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihangandaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihangandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
