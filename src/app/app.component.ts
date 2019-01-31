import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodApp';
  disableLogin(){
    document.getElementById("navLogin").setAttribute("class", "disabled nav-item nav-link");
    // (<HTMLInputElement>document.getElementById("navLogin")).className="disabled";

}

enableLogin(){
  document.getElementById("navLogin").setAttribute("class", "nav-item nav-link");
}
}

