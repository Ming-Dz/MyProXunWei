import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AdminService {

  urlcook: string = 'http://localhost:3000/ckbook';
  urlpost: string = 'http://localhost:3000/post';

  constructor(private http: HttpClient) {
  }

  getAllCookbook(callback) {
    this.http.get(this.urlcook).subscribe(function (result) {
      callback(result);
    });
  }


  getAllPost(callback) {
    this.http.get(this.urlpost).subscribe(function (result) {
      callback(result);
    });
  }

  deleteMenu(menuid, callback) {
    console.log('service' + menuid);
    // const headers = new HttpHeaders({id: menuid});
    // console.log(headers);
    this.http.post(this.urlcook + '/delmenu', {'ckid': menuid}).subscribe(function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      });
  }


  deletePost(posttitle, callback) {
    console.log('service' + posttitle);
    // const headers = new HttpHeaders({id: menuid});
    // console.log(headers);
    this.http.post(this.urlpost + '/delpost', {'title': posttitle}).subscribe(function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      });
  }
}
