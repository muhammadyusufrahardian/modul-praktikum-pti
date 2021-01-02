import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahkodemapelPage } from './tambahkodemapel.page';

describe('TambahkodemapelPage', () => {
  let component: TambahkodemapelPage;
  let fixture: ComponentFixture<TambahkodemapelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkodemapelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahkodemapelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
