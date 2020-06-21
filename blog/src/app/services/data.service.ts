import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url+'/api/posts');
  }

  getById(id: any){
    return this.http.get(this.url+'/api/posts/'+id);
  }

  getByText(data: any){
    return this.http.post(this.url+'/api/posts/',data);
  }

  createOrUpdate(post: any) {
    return this.http.post(`${this.url}/api/posts`, post);
  }

  createPost(data) {
    return this.http.post(`${this.url}/posts`, { data: JSON.stringify(data) });
  }

}
