import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { ArtistCardComponent } from "./features/artist-card/artist-card.component";
import { ArtistService } from './features/services/artist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ArtistCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'artist-hub';
  public artist: any
  constructor(private artistService: ArtistService) {
    artistService.getArtistById(1).subscribe((a) => this.artist = a)    
  }
}
