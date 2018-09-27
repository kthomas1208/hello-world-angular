import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  isSelected: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
