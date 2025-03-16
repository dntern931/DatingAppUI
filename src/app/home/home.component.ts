import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  //http = inject(HttpClient);
  registerMode = false;
  //users: any;

  // ngOnInit(): void {
  //   this.getUsers();
  // }

  registerToggle(){
    this.registerMode = !this.registerMode
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error),
  //     complete: () => console.log('Request has completed')
  //   })
  // }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
