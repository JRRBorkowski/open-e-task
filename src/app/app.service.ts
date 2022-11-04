import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './user/user';
import { AlbumPictures } from './user/album-pictures';
import { Album } from './user/album';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserData(userId: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getUserAlbums(userId: number, start: number, limit: number) {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/users/${userId}/albums?_start=${start}&_limit=${limit}`)
  }

  getAlbumPictures(albumId: number, start: number, limit: number) {
    return this.http.get<AlbumPictures[]>(`https://jsonplaceholder.typicode.com/album/${albumId}/photos?_start=${start}&_limit=${limit}`)
  }

  constructor(
    private http: HttpClient
  ) { }
  }
