import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadtugasguruPage } from './uploadtugasguru.page';

describe('UploadtugasguruPage', () => {
  let component: UploadtugasguruPage;
  let fixture: ComponentFixture<UploadtugasguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadtugasguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadtugasguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
