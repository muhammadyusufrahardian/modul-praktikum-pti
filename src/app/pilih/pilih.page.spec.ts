import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihPage } from './pilih.page';

describe('PilihPage', () => {
  let component: PilihPage;
  let fixture: ComponentFixture<PilihPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
