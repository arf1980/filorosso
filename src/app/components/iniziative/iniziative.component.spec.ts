import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniziativeComponent } from './iniziative.component';

describe('IniziativeComponent', () => {
  let component: IniziativeComponent;
  let fixture: ComponentFixture<IniziativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniziativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniziativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
