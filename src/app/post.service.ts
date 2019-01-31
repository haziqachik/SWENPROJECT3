import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<any[]>('./api/posts');
  }

  addHawker(name: string, address: string, people: string, rating: string, phone: string, email: string, coverImage: string) {
    return this.http.get('/api/addHawker/' + name + "/" + address + "/" + people + "/" + rating + "/" + phone + "/" + email + "/" + coverImage);
  }

  // updateInfo(id: number, name: string, address: string, people: string, rating: string, phone: string, open: string, email: string, coverImage: string) {
  //   return this.http.put<any[]>('./api/updatehawker/' + id,
  //     {
  //       'name': name,
  //       'address': address,
  //       'people': people,
  //       'rating': rating,
  //       'phone': phone,
  //       'open': open,
  //       'email': email,
  //       'coverImage': coverImage
  //     });
  // }

  increaseQuote(id: number, name: string, address: string, people: string, rating: string, phone: string, email:string, coverImage: string) {
    return this.http.put<any[]>('./api/posts/' + id,
      {
        'name': name,
        'address': address,
        'people': people,
        'rating': rating,
        'phone': phone,
        'email': email,
        'coverImage': coverImage
      });
  }

  getHawker(id: string) {
    return this.http.get('/api/posts/' + id);
  }

  deleteHawker(id: string) {
    return this.http.delete<any[]>('./api/posts/' + id);
    }

}
