import { Component } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Dynamic Component Demo 3';
  subTitle = "Using the NgComponentOutlet Angular's directive";
  compName = this.constructor.name;
  buttonPressed = false;

  dyn2 = MyDynamic1Component;
  dynInputs = { 'compLabel': 'my-dynamic1', 'hostCompName': this.compName };

  showDynamicComponent(){
    this.buttonPressed = true;
  }

}
