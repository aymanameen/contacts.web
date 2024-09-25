
import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { AsyncPipe } from '@angular/common';

// import { provideHttpClient } from "@angular/common/http"; 
import { bootstrapApplication } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

// import { HttpHandler,HttpClient } from '@angular/common/http';
// import { catchError } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'contacts.web';
  // http = Inject(provideHttpClient);
  constructor(private http: HttpClient) { };
  contlist: any=[];
  // contacts$=this.getcontacts();
public getcontacts()
// : Observable<Contact[]>
{
  debugger
  // return this.http.get<Contact[]>(`https://localhost:7132/api/Contacts`);
  // return this.http.get<Contact[]>(`https://localhost:7132/api/Contacts`)
  this.http.get('https://localhost:7132/api/Contacts').subscribe((result:any)=>{
    
    this.contlist=result;

  }
  )

}
}