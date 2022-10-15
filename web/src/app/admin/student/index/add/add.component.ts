import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  listOfOption: Array<{ description: string; value: string }> = [];


  constructor() {
  }


  @Output()
  isFinish = new EventEmitter<null>();

  ngOnInit(): void {
    this.listOfOption.push({ description: "软件201", value: "1" });
    this.listOfOption.push({ description: "软件202", value: "2" });
    this.listOfOption.push({ description: "软件203", value: "3" });
  }

  /**
   * 返回
   */
  backWard() {
    this.isFinish.emit(null);
  }

}
