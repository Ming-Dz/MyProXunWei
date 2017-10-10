import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CookbookService {
  url: string = 'http://localhost:3000/ckbook';

  constructor(private http: HttpClient) {
  }

  getAllCookBook(callback) {
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    });
  }
  getIndexCookBook(callback) {
    this.getAllCookBook(function (_cookbookbody) {
      let cb = _cookbookbody.filter(function (item, index) {
        if (item.ckhot == '1') {
          return item;
        }
      });
      callback(cb);
    });
  }
}
