import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginsiswaPage } from './loginsiswa.page';

describe('LoginsiswaPage', () => {
  let component: LoginsiswaPage;
  let fixture: ComponentFixture<LoginsiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginsiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
