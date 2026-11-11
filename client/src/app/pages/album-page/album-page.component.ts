
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
  standalone: false
})
export class AlbumPageComponent implements OnInit {
  albumId: string = '';
  album: AlbumData;
  tracks: TrackData[] = [];

  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.albumId) {
      this.errorMessage = 'Album ID not found.';
      return;
    }

    // Load album information
    this.spotifyService.getAlbum(this.albumId)
      .then((data) => {
        this.album = data;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to load album information.';
        console.error('Album loading failed:', error);
      });

    // Load tracks from the album
    this.spotifyService.getTracksForAlbum(this.albumId)
      .then((data) => {
        this.tracks = data;
      })
      .catch((error) => {
        console.error('Unable to load album tracks:', error);
      });
  }
}
