import { Component } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Dynamic Component Demo ';
  subTitle = "Using the NgComponentOutlet Angular's directive";
  MyDynamic1Component = MyDynamic1Component;

}
