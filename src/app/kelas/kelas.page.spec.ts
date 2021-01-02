import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KelasPage } from './kelas.page';

describe('KelasPage', () => {
  let component: KelasPage;
  let fixture: ComponentFixture<KelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
