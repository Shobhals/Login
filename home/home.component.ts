import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
