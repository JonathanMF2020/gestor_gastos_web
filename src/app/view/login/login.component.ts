import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../service/auth/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthService,private router: Router) {
    
  }

  correoInput: string = '';
  passwordInput: string = '';

  login() {

    console.log("Click");
    let value = this.service.login(this.correoInput,this.passwordInput);
    value.subscribe((e) => {
      if(e.status_code == 200){
        localStorage.setItem('cuenta', JSON.stringify(e));
        this.router.navigate(['/home']);
      }else if(e.status_code == 500){
        Swal.fire({
          title: 'Error!',
          text: 'La contraseña o correo no coinciden',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
      
    });
  }

}
