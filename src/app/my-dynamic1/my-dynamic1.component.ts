import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-dynamic1',
  templateUrl: './my-dynamic1.component.html',
  styleUrls: ['./my-dynamic1.component.css']
})
export class MyDynamic1Component {
  @Input() compLabel!: string;
  @Input() hostCompName!: string;
}
