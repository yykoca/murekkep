import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedArticlesComponent } from './selected-articles.component';

describe('SelectedArticlesComponent', () => {
  let component: SelectedArticlesComponent;
  let fixture: ComponentFixture<SelectedArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedArticlesComponent],
    });
    fixture = TestBed.createComponent(SelectedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
