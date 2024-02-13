// import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, NgSelectOption, Validators } from '@angular/forms';
// import { AccountService } from '../account.service';
// import { SharedService } from '../../shared/shared.service';
// import { Router } from '@angular/router';
// import { DOCUMENT } from '@angular/common';
// import { take } from 'rxjs';
// import { User } from '../../shared/models/account/user';
// import { Governorate } from '../../shared/models/address/governorate';
// import { District } from '../../shared/models/address/district';
// import { Options } from 'ngx-bootstrap/positioning/models';
// import { Street } from '../../shared/models/address/street';
// import { AddressService } from 'src/app/address/address.service';


// @Component({
//   selector: 'app-chief-register',
//   templateUrl: './chief-register.component.html',
//   styleUrls: ['./chief-register.component.css']
// })
// export class ChiefRegisterComponent {

//   @ViewChild('governoratesList', { static: false }) dropdown?: ElementRef<NgSelectOption>
//   selectedValue?: string 


//   registerForm: FormGroup = new FormGroup({});
//   submitted = false;
//   errorMessages: string[] = [];
//   governorates: Governorate[] = [];
//   districts: District[] = [];
//   streets: Street[] = [];
//   governorate: any;
//   selectedGovernorateId: string = '';
//   constructor(private accountService: AccountService,
//     private sharedService: SharedService,
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private _renderer2: Renderer2,
//     private addressService: AddressService,
//     @Inject(DOCUMENT) private _document: Document) {
//     this.accountService.user$.pipe(take(1)).subscribe({
//       next: (user: User | null) => {
//         if (user) {
//           this.router.navigateByUrl('/');
//         }
//       }
//     })
//   }


//   ngOnInit(): void {
//     this.governorate = this.formBuilder.group({
//       governorate: [null]
//     });
//     this.initializeForm();
//     this.addressService.getGovernorates().subscribe({
//       next: (governorates: Governorate[]) => {
//         this.governorates = governorates;
//         console.log(this.governorates);
//       },
//       error: (error) => {
//         // Handle the error
//       }
//     });
//     this.governorate.get("governorate").valueChanges.subscribe((selectedValue: string) => {
//       this.loadDistricts(selectedValue);
//     });
//   }
//   loadDistricts(selectedValue: string) {
//     //const selectedValue = this.governorate.get("governorate").value;
//     console.log(selectedValue);

//     if (selectedValue) {
//       this.addressService.getDistricts(selectedValue).subscribe({
//         next: (districts: District[]) => {
//           this.districts = districts;
//           console.log(this.districts);
//         },
//         error: (error) => {
//           // Handle the error
//         }
//       });
//     } else {
//       // If no governorate is selected, reset the districts
//       this.districts = [];
//     }
//   }

//   loadStreets(selectedValue: string) {
//     //const selectedValue = this.governorate.get("governorate").value;
//     console.log(selectedValue);

//     if (selectedValue) {
//       this.addressService.getStreets(selectedValue).subscribe({
//         next: (streets: Street[]) => {
//           this.streets = streets;
//           console.log(this.streets);
//         },
//         error: (error) => {
//           // Handle the error
//         }
//       });
//     } else {
//       // If no governorate is selected, reset the districts
//       this.districts = [];
//     }
//   }

//   extractUUID(value: string): string {
//     const parts = value.split(': ');
//     if (parts.length === 2) {
//       return parts[1];
//     }
//     return value;
//   }

//   initializeForm() {
//     this.registerForm = this.formBuilder.group({
//       firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       middleName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       govermentId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],

//     })
//   }
//   register() {

//   }

//   govarnceNameList: string[] = [];
//   govarnceIDList: string[] = [];
  

// }
import {Component, ElementRef, Input, ViewChild, input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Option } from 'src/app/shared/models/address/option';

@Component({
  selector: 'app-chief-register',
  templateUrl: './chief-register.component.html',
  styleUrls: ['./chief-register.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class ChiefRegisterComponent {
  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  filteredOptions: Option[];
  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() label = ''
  @Input() format = ''
  @Input() icon = ''
  @Input() style = ''
  @Input() class = ''
  @Input() options: Option[] = []

  constructor() {
    this.filteredOptions = this.options;
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.name.toLowerCase().includes(filterValue));
    //.map(o => o.name);
  }

  displayFn(option: Option): string {
    return option && option.name ? option.name : '';
  }
}
