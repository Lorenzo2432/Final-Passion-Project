import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const baseurl= "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private listOfUsers = new BehaviorSubject([]);
  public listOfUsersObs = this.listOfUsers.asObservable();

  constructor(public http:HttpClient) {}
  createNewUser(incomingData: any) { 
  return this.http.post(`${baseurl}/create-user`, incomingData)}

  pullAllUsers(){
    return this.http.get(`${baseurl}/getusers`)
  }
  getAllUsers() {
    this.pullAllUsers().subscribe((data: any) => {
      this.listOfUsers.next(data);
    }, (err) => {
      console.log(err);
    });
  }
}
