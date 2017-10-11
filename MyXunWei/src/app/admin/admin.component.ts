import {Component, OnInit} from '@angular/core';
import {AdminService} from './../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  _menu: any;
  _post: any;
  tabs = ['菜谱管理', '帖子管理'];
  tab_index = 0;

  constructor(private ad: AdminService) {
  }

  ngOnInit() {
    let that = this;
    //获取数据库中所有菜谱信息
    that.ad.getAllCookbook(function (result) {
      that._menu = result;
      // console.log(this._menu);
    });
    //获取数据库中所有帖子信息
    that.ad.getAllPost(function (result) {
      that._post = result;
    });

  }

  //删除菜谱
  delmenu(menuId) {
    if (confirm('是否确定删除该菜谱信息？')) {
      let that = this;
      that.ad.deleteMenu(menuId, function (result) {
        console.log(result);
        if (result.stageCode == 1) {
          //删除成功，重新拉一遍数据
          that.ad.getAllCookbook(function (result) {
            that._menu = result;
            // console.log(this._menu);
          });
        }
        // location.reload();
      });

    }
  }

  //删除帖子
  delpost(postTitle) {
    if (confirm('是否确定删除该话题信息？')) {
      let that = this;
      that.ad.deletePost(postTitle, function (result) {
        console.log(result);
        if (result.stageCode == 1) {
          //删除成功，重新拉一遍数据
          that.ad.getAllPost(function (result) {
            that._post = result;
          });
        }
        // location.reload();
      });
    }
  }
}
