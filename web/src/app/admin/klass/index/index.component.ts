import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  component = 'index' as 'index' | 'add' | 'edit';


  currentIndex = 1;

  pageSize = 10;


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 新增组件完成后，更新到列表组件中
   * @param $event
   */
  onAddFinish($event: null) {
    if($event) {
    }
    this.component = 'index';
  }
}
