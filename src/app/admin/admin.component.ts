import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { stringify } from '@angular/core/src/render3/util';
import { createLoweredSymbol } from '@angular/compiler';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'List of Posts';
  myForm: FormGroup;
  myForm2: FormGroup;
  specificHawker: any = [];
  posts: any = [];
  hawker: any = [];
  closeResult: string;
  address2: any;
  image2: any;

  getModal(id) {
    // console.log(id);
    this.postService.getHawker(id).subscribe(hawkers => {
      this.specificHawker = hawkers;
      this.address2 = atob(this.specificHawker.address);
      this.image2 = atob(this.specificHawker.coverImage);
    });
    // (<HTMLInputElement>document.getElementById("name2")).value=this.hawker.name;
    // document.getElementById("modal2").style.display = "flex";
  }
  getModals(id) {
    // console.log(id);
    this.postService.getHawker(id).subscribe(hawkers => {
      this.specificHawker = hawkers;
      this.address2 = atob(this.specificHawker.address);
      this.image2 = atob(this.specificHawker.coverImage);
    });
    // (<HTMLInputElement>document.getElementById("name2")).value=this.hawker.name;
    // document.getElementById("modal2").style.display = "flex";
  }
  getModalss(id) {
    // console.log(id);
    this.postService.getHawker(id).subscribe(hawkers => {
      this.specificHawker = hawkers;
      this.address2 = atob(this.specificHawker.address);
      this.image2 = atob(this.specificHawker.coverImage);
    });
    // (<HTMLInputElement>document.getElementById("name2")).value=this.hawker.name;
    // document.getElementById("modal2").style.display = "flex";
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

  displayModal() {
    document.getElementById("modal").style.display = "flex";
  }

  hideModal() {
    document.getElementById("modal").style.display = "none";
  }

  hideModal2() {
    document.getElementById("modal2").style.display = "none";
  }

  getDetails(id) {
    // console.log(id);
    this.postService.getHawker(id).subscribe(hawkers => {
      this.hawker = hawkers;
      this.address2 = atob(this.hawker.address);
      this.image2 = atob(this.hawker.coverImage);
    });
    // (<HTMLInputElement>document.getElementById("name2")).value=this.hawker.name;
    document.getElementById("modal2").style.display = "flex";
  }

  getName() {
    const name = this.hawker.name;
    return name;
  }
  getAddress() {
    const address = this.address2;
    // console.log(address);
    return address;
  }
  getPeople() {
    const name = this.hawker.people;
    // console.log(name);
    return name;
  }
  getRating() {
    const name = this.hawker.rating;
    return name;
  }
  getPhone() {
    const name = this.hawker.phone;
    return name;
  }
  getEmail() {
    const name = this.hawker.email;
    return name;
  }
  getImage() {
    const image = this.image2;
    // console.log(image);
    return image;
  }

  constructor(private fb: FormBuilder, private postService: PostService, private modalService: NgbModal) {
    // Retrieve posts from the API
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      address: '',
      people: '',
      rating: '',
      coverImage: '',
      email: '',
      phone: ''
    });

    this.myForm2 = this.fb.group({
      name: '',
      address: '',
      people: '',
      rating: '',
      coverImage: '',
      email: '',
      phone: ''
    })
  }

  onSubmit() {
    const imageURL = btoa(this.myForm.value.coverImage);
    const encodeAddress = btoa(this.myForm.value.address);
    this.postService.addHawker(this.myForm.value.name, encodeAddress, this.myForm.value.people, this.myForm.value.rating, this.myForm.value.phone, this.myForm.value.email, imageURL).subscribe();
  }

  increaseQuote() {
    const id = this.hawker._id;
    let name: string;
    let address: string;
    let people: string;
    let rating: string;
    let phone: string;
    let email: string;
    let image: string;

    if (this.myForm2.value.name.length == 0) {
      name = this.hawker.name;
    }
    else {
      name = this.myForm2.value.name;
    }

    if (this.myForm2.value.address.length == 0) {
      address = this.hawker.address;
    }
    else {
      address = btoa(this.myForm2.value.address);
    }

    if (this.myForm2.value.people.length == 0) {
      people = this.hawker.people;
    }
    else {
      people = this.myForm2.value.people;
    }

    if (this.myForm2.value.rating.length == 0) {
      rating = this.hawker.rating;
    }
    else {
      rating = this.myForm2.value.rating;
    }

    if (this.myForm2.value.phone.length == 0) {
      phone = this.hawker.phone;
    }
    else {
      phone = this.myForm2.value.phone;
    }

    if (this.myForm2.value.email.length == 0) {
      email = this.hawker.email;
    }
    else {
      email = this.myForm2.value.email;
    }

    if (this.myForm2.value.coverImage.length == 0) {
      image = this.hawker.coverImage;
    }
    else {
      image = btoa(this.myForm2.value.coverImage);
    }


    // console.log(name);
    // console.log(address);
    // console.log(people);
    // console.log(rating);
    // console.log(phone);
    // console.log(email);
    // console.log(image);
    this.postService.increaseQuote(id, name, address, people, rating, phone, email, image).subscribe(posts => { this.posts = posts; });
  }

  deleteHawker() {
    const id = this.hawker._id;
    this.postService.deleteHawker(id).subscribe(posts => {
      this.posts = posts;
    });
  }

  reloadPage(){
    location.reload();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2(content2) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal2-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open3(content3) {
    this.modalService.open(content3, {ariaLabelledBy: 'modal2-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
