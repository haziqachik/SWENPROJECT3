import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { PostService } from '../post.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  homeHawker: any = [];
  specificHawker: any = [];
  closeResult: string;
  address2: any;
  image2: any;

  getDetails(id) {
    // console.log(id);
    this.postService.getHawker(id).subscribe(hawkers => {
      this.specificHawker = hawkers;
      this.address2 = atob(this.specificHawker.address);
      this.image2 = atob(this.specificHawker.coverImage);
    });
    // (<HTMLInputElement>document.getElementById("name2")).value=this.hawker.name;
    // document.getElementById("modal2").style.display = "flex";
  }

  getName() {
    const name = this.specificHawker.name;
    return name;
  }
  getAddress() {
    const address = this.address2;
    // console.log(address);
    return address;
  }
  getPeople() {
    const name = this.specificHawker.people;
    // console.log(name);
    return name;
  }
  getRating() {
    const name = this.specificHawker.rating;
    return name;
  }
  getPhone() {
    const name = this.specificHawker.phone;
    return name;
  }
  getEmail() {
    const name = this.specificHawker.email;
    return name;
  }
  getImage() {
    const image = this.image2;
    // console.log(image);
    return image;
  }

  constructor(private authService: AuthService, private appComponent: AppComponent, private postService: PostService, private modalService: NgbModal) {
    if (this.authService.isLoggedIn()) {
      this.appComponent.disableLogin();
    }
    else {
      this.appComponent.enableLogin();
    }

    // Retrieve posts from the API
    this.postService.getAllPosts().subscribe(posts => {
      this.homeHawker = posts;
    });
  }
  ngOnInit() {
  }
  
  decodeImage(image) {
    const decodedImage = atob(image);
    // console.log(decodedImage);
    return (decodedImage);
  }

  decodeAddress(address) {
    const decodedAddress = atob(address);
    // console.log(decodedImage);
    return (decodedAddress);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
