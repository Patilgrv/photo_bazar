import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  images: { url: string; alt: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    this.http.get<any>('../assets/db.json').subscribe(
      (data: any) => {
        this.images = data.galleryImages;
      },
      (error: any) => {
        console.error('Error fetching images:', error);
      }
    );
  }
}
