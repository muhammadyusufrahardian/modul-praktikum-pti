import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadwasiswaPage } from './jadwasiswa.page';

describe('JadwasiswaPage', () => {
  let component: JadwasiswaPage;
  let fixture: ComponentFixture<JadwasiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwasiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadwasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
