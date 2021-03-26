import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../Shared/Services/api-data.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _apiDataService: ApiDataService,
    public fb: FormBuilder) { }

    userInfo!: FormGroup;
  
  users:any=[]

  ngOnInit(): void {
    this.initForm()
    this.getAllUsers()
    
  }
  initForm(): void {
    this.userInfo = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      sport: [null, Validators.required],
    });
  }

  createNewUser(){
    let postFirstname = this.userInfo.value.firstname;
    let postLastname = this.userInfo.value.lastname;
    let postSport = this.userInfo.value.sport;
    let postData = {
      "firstname": postFirstname,
      "lastname": postLastname,
      "sport": postSport,
    }
    console.log(postData)
    this._apiDataService.createNewUser(postData).
    subscribe((data: any) => {
      alert("Your Post Has Been Made!")
    });
    this.getAllUsers();
    this.userInfo.reset();
  }



  getAllUsers(){
    this._apiDataService.getAllUsers();
    this._apiDataService.listOfUsersObs.
    subscribe(data =>{
      this.users=data
    })
  }


  messages = [{'from':"Carlos", 'subject':"-  Soccer", 'content':"I like to play Soccer "}]
  kevin = [{'from':"Kevin", 'subject':"-  Football", 'content':"I like to play Football "}]
  manuel = [{'from':"Manuel", 'subject':"-  BasketBall", 'content':"I like to play BasketBall "}]
  dad = [{'from':"Mohammed", 'subject':"-  Baseball", 'content':"I like to play Baseball "}]
  ali = [{'from':"Ali", 'subject':"-  Dirt Biking", 'content':"I like to go dirt biking in the montains and enjoy the fun of it "}]
  david = [{'from':"David", 'subject':"-  Cycling", 'content':"I like to go cycling in the city  "}]
  panelOpenState = false;

}
