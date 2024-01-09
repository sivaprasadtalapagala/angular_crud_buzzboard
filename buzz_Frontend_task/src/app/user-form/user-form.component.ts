import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: any;
  users: User[] = [];
  selectedUser: User | null = null;
  editMode=false;
  editable_user:any;

  constructor(private fb: FormBuilder, private userService: UserService,
    private http:HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['',[Validators.required]],
      company: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });

  }




  addUser(): void {
    const user = this.userForm.value;
    this.userForm.markAllAsTouched();
    console.log("this.userForm",this.userForm)
    if(this.userForm.invalid){
console.log("Please fill required fields")
    }else{

      if(this.editMode){
        this.editUser(this.editable_user,user)
      }
      else{
        this.userService.addUser(user).subscribe(
          (response) => {
            console.log('User added successfully:', response);
            // Optionally, you can reset the form here
            this.userForm.reset();
            this.loadUsers();
    
          },
          (error) => {
            console.error('Error adding user:', error);
          }
        );
      }

    }
   
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
  

  editUser(user: User,user_payload:any): void {
    
    if (user.id) {
      this.userService.editUser(user.id, user_payload).subscribe(() => {
        this.loadUsers();
        this.editMode=false;

      });
    }
  }

  deleteUser(id: any): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  selectUser(user: User): void {
    // Patch the selected user's values into the form
    this.userForm.patchValue(user);
    this.editMode=true;
    this.editable_user=user
  }

  clearSelection(): void {
    this.selectedUser = null;
  }
  userForm_reset(){
    this.userForm.reset();
    this.editMode=false;
  }



  //get validation
get _firstName(){
  console.log("cdvvffdcads",this.userForm.get('firstName'))
  return this.userForm.get('firstName')
}
get _lastName() {
  return this.userForm.get('lastName');
}

get _email() {
  return this.userForm.get('email');
}

get _phone() {
  return this.userForm.get('phone');
}

get _company() {
  return this.userForm.get('company');
}

get _gender() {
  return this.userForm.get('gender');
}

get _dob() {
  return this.userForm.get('dob');
}

get _password() {
  return this.userForm.get('password');
}

get _confirmPassword() {
  return this.userForm.get('confirmPassword');
}
}
