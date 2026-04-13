import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArticlesComponent } from './top-articles.component';

describe('TopArticlesComponent', () => {
  let component: TopArticlesComponent;
  let fixture: ComponentFixture<TopArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopArticlesComponent],
    });
    fixture = TestBed.createComponent(TopArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
