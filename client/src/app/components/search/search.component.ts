import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService],
  standalone: false
})
export class SearchComponent implements OnInit {
  searchString: string = '';
  searchCategory: string = 'artist';
  searchCategories: string[] = ['artist', 'album', 'track'];
  resources: ResourceData[] = [];
  tracks: TrackData[] = [];

  resultCategory: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() { }

  search(): void {
    const query = this.searchString.trim();
    if (!query || this.loading) {
      return;
    }

    // Keep the results tied to the category used for this request.
    const category = this.searchCategory;
    this.loading = true;
    this.errorMessage = '';
    this.resources = [];
    this.tracks = [];

    this.spotifyService.searchFor(category, query)
      .then((results) => {
        this.resultCategory = category;
        this.resources = results;
        this.tracks = category === 'track'
          ? results as TrackData[]
          : [];
        this.loading = false;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to search. Please try again.';
        this.loading = false;
        console.error('Search failed:', error);
      });
  }
}