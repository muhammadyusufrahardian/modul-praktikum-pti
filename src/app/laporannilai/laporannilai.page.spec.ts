import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaporannilaiPage } from './laporannilai.page';

describe('LaporannilaiPage', () => {
  let component: LaporannilaiPage;
  let fixture: ComponentFixture<LaporannilaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporannilaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaporannilaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
