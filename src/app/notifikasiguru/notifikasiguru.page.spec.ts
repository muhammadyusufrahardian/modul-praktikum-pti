import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifikasiguruPage } from './notifikasiguru.page';

describe('NotifikasiguruPage', () => {
  let component: NotifikasiguruPage;
  let fixture: ComponentFixture<NotifikasiguruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifikasiguruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifikasiguruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
