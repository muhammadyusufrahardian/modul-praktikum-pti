import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TugasguruPage } from './tugasguru.page';

describe('TugasguruPage', () => {
  let component: TugasguruPage;
  let fixture: ComponentFixture<TugasguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugasguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TugasguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
