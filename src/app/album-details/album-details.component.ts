import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AlbumPictures } from '../user/album-pictures';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  userPictures: AlbumPictures[] | undefined;

  selectedPictures: AlbumPictures[] = [];

  highlightedPicture: AlbumPictures | undefined;

  pageNumber: number = 0;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRouteParams = Number(routeParams.get('albumId'));
    this.appService.getAlbumPictures(idFromRouteParams, 0, 4).subscribe((resultIdPictures) => {
      this.userPictures = resultIdPictures;
    })
  };

  addPictureToSelect(selectedPicture: AlbumPictures) {
    this.selectedPictures.push(selectedPicture);
  };

  highlightPicture(selectedPicture: AlbumPictures) {
    if (selectedPicture === this.highlightedPicture) {
      this.selectedPictures.filter(picture => picture !== this.highlightedPicture);
      this.highlightedPicture = undefined;
    } else {
      this.highlightedPicture = selectedPicture;
    }
  }

  changePage(pageNumberDelta: number) {
    this.pageNumber = this.pageNumber + pageNumberDelta;

    const routeParams = this.route.snapshot.paramMap;
    const idFromRouteParams = Number(routeParams.get('albumId'));
    this.appService.getAlbumPictures(idFromRouteParams, this.pageNumber * 4, 4).subscribe((resultIdPictures) => {
      this.userPictures = resultIdPictures;
    })
  }
}
