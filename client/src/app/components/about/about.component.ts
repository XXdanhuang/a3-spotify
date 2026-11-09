import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {
  name: string = '';
  profile_pic: string = 'assets/unknown.jpg';
  profile_link: string = '';
  errorMessage: string = '';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() { }

  // Load the user's profile when the button is clicked.
  loadAboutMe(): void {
    this.errorMessage = '';

    this.spotifyService.aboutMe()
      .then((profile) => {
        this.name = profile.name;
        this.profile_pic = profile.imageURL;
        this.profile_link = profile.spotifyProfile;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to load profile. Please try again.';
        console.error('Failed to load profile:', error);
      });
  }
}