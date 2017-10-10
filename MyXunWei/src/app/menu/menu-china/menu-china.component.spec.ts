import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChinaComponent } from './menu-china.component';

describe('MenuChinaComponent', () => {
  let component: MenuChinaComponent;
  let fixture: ComponentFixture<MenuChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuChinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
