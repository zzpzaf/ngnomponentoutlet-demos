import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamic1Component } from './my-dynamic1.component';

describe('MyDynamic1Component', () => {
  let component: MyDynamic1Component;
  let fixture: ComponentFixture<MyDynamic1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDynamic1Component]
    });
    fixture = TestBed.createComponent(MyDynamic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
