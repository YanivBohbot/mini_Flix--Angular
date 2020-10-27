import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  
  movies;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }


getMovies(){



  this.movieService.getMovies().subscribe(
    data => {
      this.movies = data ; 
      console.log(data);
    },
    err => {
      console.log(err);
      () => console.log("succes");

    }
  )
}



















}
