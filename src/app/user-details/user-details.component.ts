import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { AppService } from '../app.service';
import { Album } from '../user/album';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails: User | undefined;
  userAlbums: Album[] | undefined;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRouteParams = Number(routeParams.get('userId'));
    this.appService.getUserData(idFromRouteParams).subscribe((resultIdData) => {
      this.userDetails = resultIdData;
    })
    this.appService.getUserAlbums(idFromRouteParams, 0, 3).subscribe((resultAlbumData) => {
      this.userAlbums = resultAlbumData;
    })
  }
}
