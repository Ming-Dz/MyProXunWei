import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBakeComponent } from './menu-bake.component';

describe('MenuBakeComponent', () => {
  let component: MenuBakeComponent;
  let fixture: ComponentFixture<MenuBakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
