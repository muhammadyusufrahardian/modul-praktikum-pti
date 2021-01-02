import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormtugasguruPage } from './formtugasguru.page';

describe('FormtugasguruPage', () => {
  let component: FormtugasguruPage;
  let fixture: ComponentFixture<FormtugasguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtugasguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormtugasguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
