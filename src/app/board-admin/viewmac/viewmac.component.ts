import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-viewmac',
  templateUrl: './viewmac.component.html',
  styleUrls: ['./viewmac.component.css']
})
export class ViewmacComponent implements OnInit {

  
  macs: any;
  isLoggedIn: boolean;

  private roles: string[];
  constructor(private tokenStorage: TokenStorageService,private router: Router , private userService:UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(["/home"]);
    }
    else{
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      if(!this.roles.includes('ROLE_ADMIN')){
        this.router.navigate(["/home"]);
      }
    }
    let list = this.userService.viewAllMacs();
    list.subscribe((data) => this.macs=data);
    console.log(this.macs);
    alert(this.macs[0].id)
  }

  deleteMac(index){
    var message;
     let del = this.userService.deleteMac(this.macs[index].id);
     del.subscribe(
       data=> {
         message=data;
        
        }
     );
     this.reloadPage();
    }


    reloadPage() {
      window.location.reload();
    }

}
