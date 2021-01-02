import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormnilaiguruPage } from './formnilaiguru.page';

describe('FormnilaiguruPage', () => {
  let component: FormnilaiguruPage;
  let fixture: ComponentFixture<FormnilaiguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormnilaiguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormnilaiguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
