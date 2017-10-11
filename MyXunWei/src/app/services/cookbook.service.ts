import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CookbookService {
  url: string = 'http://localhost:3000/ckbook';

  constructor(private http: HttpClient) {
  }
  //从数据库中拉取所有菜谱信息
  getAllCookBook(callback) {
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    });
  }
  //根据字段1筛选首页的热门的菜谱信息
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
