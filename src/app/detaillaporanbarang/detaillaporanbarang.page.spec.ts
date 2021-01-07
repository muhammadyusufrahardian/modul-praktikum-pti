import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaillaporanbarangPage } from './detaillaporanbarang.page';

describe('DetaillaporanbarangPage', () => {
  let component: DetaillaporanbarangPage;
  let fixture: ComponentFixture<DetaillaporanbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillaporanbarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaillaporanbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
