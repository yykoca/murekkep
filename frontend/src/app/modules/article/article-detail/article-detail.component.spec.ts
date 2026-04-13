import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailComponent } from '@app/modules/article/article-detail/article-detail.component';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleDetailComponent],
    });
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
