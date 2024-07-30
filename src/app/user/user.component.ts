import {Component} from '@angular/core';
import {DUMMY_USERS} from "../../dummy/users";

const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);

type User = { name: string; id: string; avatar: string }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser: User = DUMMY_USERS[randomIdx];

  get imagePath(): string {
    return `assets/users/${this.selectedUser.avatar}`
  }

}
