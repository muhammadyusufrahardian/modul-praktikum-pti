import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihangandasiswaPage } from './pilihangandasiswa.page';

describe('PilihangandasiswaPage', () => {
  let component: PilihangandasiswaPage;
  let fixture: ComponentFixture<PilihangandasiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihangandasiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihangandasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
