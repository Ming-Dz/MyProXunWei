import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuForeignComponent } from './menu-foreign.component';

describe('MenuForeignComponent', () => {
  let component: MenuForeignComponent;
  let fixture: ComponentFixture<MenuForeignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuForeignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuForeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
