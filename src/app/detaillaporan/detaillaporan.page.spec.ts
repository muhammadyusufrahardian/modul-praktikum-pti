import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaillaporanPage } from './detaillaporan.page';

describe('DetaillaporanPage', () => {
  let component: DetaillaporanPage;
  let fixture: ComponentFixture<DetaillaporanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillaporanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaillaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
