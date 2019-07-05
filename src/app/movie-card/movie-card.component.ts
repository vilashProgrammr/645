import { Component, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetailsPopupComponent } from '../movie-details-popup/movie-details-popup.component';
@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  movie: Object;

  constructor(public dialog: MatDialog) {}

  openDialog(movie) {
   //Uncomment the below block to pass the Testcase 1
  
    let dialogRef = this.dialog.open( MovieDetailsPopupComponent, {
    height: '600px',
    width: '800px',
    data: movie
    });
    dialogRef.componentInstance.movie = movie;
   
  }
}
