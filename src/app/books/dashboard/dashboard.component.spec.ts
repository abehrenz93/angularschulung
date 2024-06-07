import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Book} from "../shared/book";
import {BookRatingService} from "../shared/book-rating.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock = {
      doRateUp: ( b: Book) => b,
      doRateDown: (b: Book) => b,
    }

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        {provide: BookRatingService , useValue: ratingMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service methode', ()=>{
    const rs = TestBed.inject(BookRatingService);
    const testBook = { isbn: '123', } as Book;

    spyOn(rs, 'doRateUp').and.callThrough();

    component.doRateUp(testBook);

    expect(rs.doRateUp).toHaveBeenCalledOnceWith(testBook);
  })
});
