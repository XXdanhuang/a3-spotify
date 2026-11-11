
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
  standalone: false
})
export class ArtistPageComponent implements OnInit {
  artistId: string = '';
  artist: ArtistData;
  topTracks: TrackData[] = [];
  albums: AlbumData[] = [];

  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.artistId) {
      this.errorMessage = 'Artist ID not found.';
      return;
    }

    this.spotifyService.getArtist(this.artistId)
      .then((data) => {
        this.artist = data;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to load artist information.';
        console.error(error);
      });

    this.spotifyService.getTopTracksForArtist(this.artistId)
      .then((data) => {
        this.topTracks = data;
      })
      .catch((error) => {
        console.error('Unable to load top tracks:', error);
      });

    this.spotifyService.getAlbumsForArtist(this.artistId)
      .then((data) => {
        this.albums = data;
      })
      .catch((error) => {
        console.error('Unable to load albums:', error);
      });
  }
}
