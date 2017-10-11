import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HealthService {
  url: string = 'http://localhost:3000/health';

  constructor(private http: HttpClient) {
  }
  //从数据库中拉取所有健康信息
  getAllHealth(callback) {
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log(result);
    });
  }
  //根据传来的title参数筛选，返回与标题对应的详细信息
  getDetailHealth(title, callback) {
    this.getAllHealth(function (_healthbody) {
      let ho = _healthbody.filter(function (item, index) {
        if (item.healthtitle == title) {
          return item;
        }
      });
      callback(ho);
    });
  }
  //根据字段1筛选首页的健康信息
  getIndexHealth(callback) {
    this.getAllHealth(function (_healthbody) {
      let ho = _healthbody.filter(function (item, index) {
        if (item.index == '1') {
          return item;
        }
      });
      callback(ho);
    });
  }
}
