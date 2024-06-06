import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() ratingValue: number = 0;
  rating: number[] = [];

  ngOnChanges(){
     this.rating = new Array(this.ratingValue );
  }

}
