
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
  standalone: false
})
export class TrackPageComponent implements OnInit {
  trackId: string = '';
  track: TrackData;

  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.trackId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.trackId) {
      this.errorMessage = 'Track ID not found.';
      return;
    }

    // Load track information
    this.spotifyService.getTrack(this.trackId)
      .then((data) => {
        this.track = data;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to load track information.';
        console.error('Track loading failed:', error);
      });
  }
}
