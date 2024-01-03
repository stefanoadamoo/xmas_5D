import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { piloti } from 'src/models/model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  italiani: piloti[];
  spagnoli: piloti[];
  francesi: piloti[];
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  // Make the HTTP request:
  this.http.get<piloti[]>('https://3000-stefanoadamoo-xmas5d-rmm098ymquj.ws-eu107.gitpod.io/api').subscribe(data => {
  // Read the result field from the JSON response.
  this.italiani = data;

  });
  this.http.get<piloti[]>('https://3000-stefanoadamoo-xmas5d-rmm098ymquj.ws-eu107.gitpod.io/catch').subscribe(data => {
  // Read the result field from the JSON response.
  this.francesi = data;

  });
  this.http.get<piloti[]>('https://3000-stefanoadamoo-xmas5d-rmm098ymquj.ws-eu107.gitpod.io/nope').subscribe(data => {
  // Read the result field from the JSON response.
  this.spagnoli = data;

  });
  }
  
  }