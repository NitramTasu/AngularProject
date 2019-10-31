import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-component',
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserComponent {
  userId = '';
  data: object = {};
  loading = false;
  userKey: object = {};

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    housenumber: new FormControl('', Validators.required),
    complement: new FormControl('', Validators.required),
  });

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) { this.getUser(this.userId); }
  }

  private getUser(id: string) {
    this.usersService.getById(id).subscribe((data: any) => {
      const result = data[0].payload.doc.data();
      this.userKey = data[0].payload.doc.id;
      Object.keys(result)
        .filter(item => item != 'id')
        .forEach(item => {
          this.userForm.controls[item].setValue(result[item]);
        });
    });
  }

  setValue(event) {
    const { target } = event;
    this.data = {
      ...this.data,
      [target.name]: target.value
    };
  }

  onSubmit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loading = true;

    if (this.userId) {
      const data = {
        ...this.userForm.value,
        id: this.userId
      };
      this.usersService.updateByKey(this.userKey, data);
    } else {
      this.createService();
    }

    return;
  }
  createService() {
    this.usersService
      .create(this.userForm.value)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.loading = false;
      });
  }
}
