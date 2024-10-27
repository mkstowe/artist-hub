import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/Artist';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss'
})
export class ArtistCardComponent implements OnInit {
  @Input() artist?: Artist;

  constructor(private artistService: ArtistService) {}
  
  ngOnInit(): void {
  }
}
