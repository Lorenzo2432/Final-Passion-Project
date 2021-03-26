import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  messages = [{'from':"Carlos", 'subject':"-  Soccer", 'content':"I like to play Soccer "}]
  kevin = [{'from':"Kevin", 'subject':"-  Football", 'content':"I like to play Football "}]
  manuel = [{'from':"Manuel", 'subject':"-  BasketBall", 'content':"I like to play BasketBall "}]
  dad = [{'from':"Mohammed", 'subject':"-  Baseball", 'content':"I like to play Baseball "}]
  ali = [{'from':"Ali", 'subject':"-  Dirt Biking", 'content':"I like to go dirt biking in the montains and enjoy the fun of it "}]
  david = [{'from':"David", 'subject':"-  Cycling", 'content':"I like to go cycling in the city  "}]
  panelOpenState = false;


}
