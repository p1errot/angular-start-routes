import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Useful when you want to get properties once you init first time
    let usernameSnapshot: string = this.route.snapshot.paramMap.get('username');
    console.log('usernameSnapshot: ', usernameSnapshot);

    // Get properties as subscriber, notify each change
    this.route.paramMap
      .subscribe(params => {
        let username: string = params.get('username');
        console.log('username: ', username);
      });
  }

  submit() {
    console.log('submit');
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    })
  }

}
