import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';

  constructor(private userService: UserService , private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
