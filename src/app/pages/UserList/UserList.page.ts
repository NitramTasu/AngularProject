import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';

@Component({
  selector: 'user-list',
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})
export class UserListPage {
   results = [];
   filterBy = '';
   orderBy: number;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(result =>
      result.forEach(item => {
        this.results.push(item.payload.doc.data());
      })
    );
  }
  delete(id: string) {
    this.usersService.getById(id).subscribe((data: any) => {
      const userKey = data[0].payload.doc.id;
      this.usersService.deleteByKey(userKey);
    });
  }
  setFilterBy(event: any) {
    this.filterBy = event.target.value;
  }

  onSelectChange(valor: number) {
      this.orderBy = valor;
  }
}
