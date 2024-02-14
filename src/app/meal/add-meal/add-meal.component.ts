import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { SelectInputComponent } from "../../shared/select-input/select-input.component";
import { Option } from 'src/app/shared/models/address/option';
import { ChipsAutoCompleteInputComponent } from "../../shared/chips-auto-complete-input/chips-auto-complete-input.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MealsService } from 'src/app/api/services/meals.service';
import { ChiefRegisterComponent } from 'src/app/account/chief-register/chief-register.component';
import { MealsPost$Params } from 'src/app/api/fn/meals/meals-post';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FileInputComponent } from "../../shared/file-input/file-input.component";
import { MealOptionPost$Params } from 'src/app/api/fn/meal-option/meal-option-post';
import { MealOptionService } from 'src/app/api/services/meal-option.service';
import { MealsPut$Params } from 'src/app/api/fn/meals/meals-put';
import { Meal } from 'src/app/shared/models/meal/meal';
import { mealOption } from 'src/app/shared/models/meal/mealOption';
import { MatIconModule } from '@angular/material/icon';
import { MealOptionPut$Params } from 'src/app/api/fn/meal-option/meal-option-put';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-meal',
  standalone: true,
  templateUrl: './add-meal.component.html',
  styleUrl: './add-meal.component.css',
  imports: [MatIconModule, CommonModule, MatButtonToggleModule, AsyncPipe, MatButtonModule, MatStepperModule, ChiefRegisterComponent, FormsModule, MatFormFieldModule, MatInputModule, SharedModule, SelectInputComponent, ChipsAutoCompleteInputComponent, FileInputComponent]
})
export class AddMealComponent {

  title: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator, Validators.minLength(3), Validators.maxLength(20)],
  });
  category: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });
  spiceLevel: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });
  tags: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });
  description: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator, Validators.minLength(3), Validators.maxLength(200)],
  });

  mealSize: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });

  price: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator, Validators.min(5), Validators.max(5000)],
  });

  saveQuantitySetting: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });

  isAvailable: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });

  quantity: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator, Validators.min(5), Validators.max(100)],
  });

  image: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.nullValidator],
  });

  imagePath: FormControl = new FormControl('');

  file: Blob | null = null

  addMealForm: FormGroup = new FormGroup({});
  addMealOptionForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];
  returnUrl: string | null = null;
  stepperOrientation: Observable<StepperOrientation>;
  mealID: string | null = ''
  smallMealOptionID: string | null = ''
  mediumMealOptionAdded: string | null = ''
  largeMealOptionAdded: string | null = ''
  categoryOptions: Option[] = [];
  spiceLevelOptions: Option[] = [];
  tagsOptions: Option[] = [];
  isMealAdded: boolean = false;
  isSmallMealOptionAdded: boolean = false;
  isMediumMealOptionAdded: boolean = false;
  isLargeMealOptionAdded: boolean = false;
  meal: Meal = {
    title: '',
    mealID: '',
    description: '',
    mealOptions: []
  }
  previousMealSize: number
  currentMealOption: mealOption = {
    mealOptionID: '',
    MealSizeOption: 0,
    isAvailable: false,
    price: 0,
    availableQuantity: 0,
    saveQuantitySetting: false,
    // imagePath: ''
  }
  //imagePath: string = '';


  constructor(private mealsService: MealsService,
    private mealOptionService: MealOptionService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    breakpointObserver: BreakpointObserver) {
    this.categoryOptions.push({ id: '0', name: 'Main Dish' }, { id: '1', name: 'Side Dish' }, { id: '2', name: 'Appetizer' });
    this.spiceLevelOptions.push({ id: '0', name: 'Not Spicy' }, { id: '1', name: 'Mild' }, { id: '2', name: 'Medium' }, { id: '3', name: 'Hot' }, { id: '4', name: 'Very Hot' });
    this.tagsOptions.push({ id: '1', name: 'Healthy' }, { id: '3', name: 'Keto' }, { id: '6cea3c8b-ae0c-44a8-ad6d-4f2ff7f7e1df', name: 'Not Healthy' }, { id: '6cea3c8b-ae0c-44a8-ad6d-4f2ff7f7e1df', name: 'Wrong ID' }, { id: '4', name: 'Very Hot' });

    this.addMealForm = this.formBuilder.group({
      title: this.title,
      category: this.category,
      spiceLevel: this.spiceLevel,
      tags: this.tags,
      description: this.description,
    })

    this.addMealOptionForm = this.formBuilder.group({
      mealID: this.mealID,
      SizeOption: this.mealSize,
      price: this.price,
      saveQuantitySetting: this.saveQuantitySetting,
      isAvailable: this.isAvailable,
      quantity: this.quantity,
      image: this.image
    })

    this.quantity.disable()
    this.saveQuantitySetting.disable()

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));


    this.previousMealSize = this.addMealOptionForm.get('SizeOption')?.value;
    this.addMealOptionForm.get('SizeOption')?.valueChanges.subscribe((currentMealSize) => {
      this.saveMealOption(this.currentMealOption.mealOptionID)
      console.log(this.meal, this.imagePath)
      this.previousMealSize = currentMealSize;

      let index = this.meal.mealOptions?.findIndex(x => x.MealSizeOption == this.previousMealSize);

      if (index !== -1 && index !== undefined) {
        this.currentMealOption = this.meal.mealOptions[index]
        //this.mealSize.setValue(this.currentMealOption.MealSizeOption)
        this.price.setValue(this.currentMealOption.price)
        this.saveQuantitySetting.setValue(this.currentMealOption.saveQuantitySetting)
        this.isAvailable.setValue(this.currentMealOption.isAvailable)
        this.quantity.setValue(this.currentMealOption.availableQuantity)
        this.image.setValue(this.currentMealOption.image)
        // this.imagePath.setValue(this.currentMealOption.imagePath)
      }
      else {
        this.price.reset()
        this.saveQuantitySetting.reset()
        this.isAvailable.reset()
        this.quantity.reset()
        this.image.reset()
      }
    });
  }

  saveMeal() {
    this.meal = {
      title: this.addMealForm.value.title,
      mealID: this.mealID ?? '',
      mealCategory: +this.addMealForm.value.category.id,
      mealSpiceLevel: +this.addMealForm.value.spiceLevel.id,
      description: this.addMealForm.value.description,
      mealOptions: []
    }
  }

  saveMealOption(mealOptionID: string | null) {
    this.currentMealOption = {
      mealOptionID: this.currentMealOption.mealOptionID || mealOptionID || '',
      MealSizeOption: this.previousMealSize,
      isAvailable: this.isAvailable.value,
      price: this.price.value,
      availableQuantity: this.quantity.value,
      saveQuantitySetting: this.saveQuantitySetting.value,
      image: this.image.value,
      // imageFile: this.image.value,
      // imagePath: this.imagePath.value
    }
    let index = this.meal.mealOptions?.findIndex(x => x.MealSizeOption == this.previousMealSize);

    if (index !== -1 && index !== undefined) {
      // Object exists, update it
      this.meal.mealOptions[index] = this.currentMealOption;
    } else {
      // Object does not exist, push new object
      this.meal.mealOptions?.push(this.currentMealOption);
    }
  }

  mealForm() {
    if (this.addMealForm.valid && !this.isMealAdded) {
      const createMealRequest: MealsPost$Params = {
        body: {
          'name': this.addMealForm.value.title,
          'description': this.addMealForm.value.description,
          'mealCategory': +this.addMealForm.value.category.id,
          'mealSpiceLevel': +this.addMealForm.value.spiceLevel.id,
          'tagsID': this.addMealForm.value.tags.map((o: Option) => o.id),
        }
      }
      let dialogRef: MatDialogRef<LoadingSpinnerComponent> = this.dialog.open(LoadingSpinnerComponent, {
        panelClass: '',
        disableClose: true
      });
      this.mealsService.mealsPost$Response(createMealRequest).subscribe({
        next: (response: HttpResponse<any>) => {
          // dialogRef.close()
          this.mealID = response.headers.get('Location');
          this.saveMeal()
          this.isMealAdded = true;
        },
        error: error => {
          // dialogRef.close()
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      });
    }
    else if (this.addMealForm.valid && this.isMealAdded) {
      const updateMealRequest: MealsPut$Params = {
        body: {
          'MealID': this.mealID ?? '',
          'Name': this.addMealForm.value.title,
          'Description': this.addMealForm.value.description,
          'MealCategory': +this.addMealForm.value.category.id,
          'MealSpiceLevel': +this.addMealForm.value.spiceLevel.id,
          'TagsID': this.addMealForm.value.tags.map((o: Option) => o.id),
        }
      }
      this.mealsService.mealsPut(updateMealRequest).subscribe({
        next: () => {
          this.saveMeal()
        },
        error: error => {
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      })
    }
  }

  mealOptionForm() {
    type MealSizeValues = 0 | 1 | 2;
    // Define a type for the meal size actions
    const mealSizeActions = {
      0: this.isSmallMealOptionAdded,
      1: this.isMediumMealOptionAdded,
      2: this.isLargeMealOptionAdded,
    };

    const action = mealSizeActions[this.mealSize.value as MealSizeValues];
    if (action) {
      this.putMealOption();
    } else {
      this.postMealOption();
    }
  }


  postMealOption() {
    const createMealOptionRequest: MealOptionPost$Params = {
      body: {
        'MealID': this.mealID ?? '',
        'MealSizeOption': this.mealSize.value,
        'IsAvailable': this.isAvailable.value,
        'Price': this.price.value,
        'AvailableQuantity': this.quantity.value,
        'SaveQuantitySetting': this.saveQuantitySetting.value,
        'Image': this.image.value.file
      }
    }
    let dialogRef: MatDialogRef<LoadingSpinnerComponent> = this.dialog.open(LoadingSpinnerComponent, {
      panelClass: '',
      disableClose: true
    });
    this.mealOptionService.mealOptionPost(createMealOptionRequest).subscribe({
      next: (mealOptionID) => {

        dialogRef.close()

        if (this.mealSize.value === 0) {
          this.isSmallMealOptionAdded = true
          this.smallMealOptionID = mealOptionID[0]
        }
        else if (this.mealSize.value === 1) {
          this.isMediumMealOptionAdded = true
          this.mediumMealOptionAdded = mealOptionID[0]
        }
        else if (this.mealSize.value === 2) {
          this.isLargeMealOptionAdded = true
          this.largeMealOptionAdded = mealOptionID[0]
        }
        this.saveMealOption(mealOptionID)
        console.log(this.meal)
      },
      error: error => {

        dialogRef.close()

        if (error.error.errors) {
          this.errorMessages = error.error.errors;
        } else {
          this.errorMessages.push(error.error);
        }
      }
    })
  }

  putMealOption() {
    const updateMealOptionRequest: MealOptionPut$Params = {
      body: {
        'mealOptionID': this.currentMealOption.mealOptionID ?? '',
        'isAvailable': this.isAvailable.value,
        'price': this.price.value,
        'availableQuantity': this.quantity.value,
        'saveQuantitySetting': this.saveQuantitySetting.value,
        'image': this.image.value.file
      }
    }
    this.mealOptionService.mealOptionPut(updateMealOptionRequest).subscribe({
      next: () => {
        if (this.mealSize.value === 0) {
          this.isSmallMealOptionAdded = true
        }
        else if (this.mealSize.value === 1) {
          this.isMediumMealOptionAdded = true
        }
        else if (this.mealSize.value === 2) {
          this.isLargeMealOptionAdded = true
        }
      },
      error: error => {
        if (error.error.errors) {
          this.errorMessages = error.error.errors;
        } else {
          this.errorMessages.push(error.error);
        }
      }
    })
  }

  // addMeal() {
  //   if (!this.isMealAdded) {
  //     if (this.addMealForm.valid) {
  //       const createMealRequest: MealsPost$Params = {
  //         body: {
  //           'name': this.addMealForm.value.title,
  //           'description': this.addMealForm.value.description,
  //           'mealCategory': +this.addMealForm.value.category.id,
  //           'mealSpiceLevel': +this.addMealForm.value.spiceLevel.id,
  //           'tagsID': this.addMealForm.value.tags.map((o: Option) => o.id),
  //         }
  //       }
  //       this.mealsService.mealsPost$Response(createMealRequest,).subscribe({
  //         next: (response: HttpResponse<any>) => {
  //           this.mealID = response.headers.get('Location');
  //           this.isMealAdded = true;
  //           this.saveMeal()
  //           console.log(this.meal)
  //         },
  //         error: error => {
  //           if (error.error.errors) {
  //             this.errorMessages = error.error.errors;
  //           } else {
  //             this.errorMessages.push(error.error);
  //           }
  //         }
  //       })
  //     }
  //   }
  // }

  // addMealOption() {
  //   if (this.addMealOptionForm.valid) {
  //     const createMealOptionRequest: MealOptionPost$Params = {
  //       body: {
  //         'MealID': this.mealID ?? '',
  //         'MealSizeOption': this.mealSize.value,
  //         'IsAvailable': this.isAvailable.value,
  //         'Price': this.price.value,
  //         'AvailableQuantity': this.quantity.value,
  //         'SaveQuantitySetting': this.saveQuantitySetting.value,
  //         'Image': this.image.value
  //       }
  //     }

  //     this.mealOptionService.mealOptionPost(createMealOptionRequest).subscribe({
  //       next: (mealOptionID) => {

  //         if (this.mealSize.value === 1) {
  //           this.isSmallMealOptionAdded = true
  //           this.smallMealOptionID = mealOptionID[0]
  //         }
  //         else if (this.mealSize.value === 2) {
  //           this.isMediumMealOptionAdded = true
  //           this.mediumMealOptionAdded = mealOptionID[0]
  //         }
  //         else if (this.mealSize.value === 3) {
  //           this.isLargeMealOptionAdded = true
  //           this.largeMealOptionAdded = mealOptionID[0]
  //         }
  //       },
  //       error: error => {

  //         if (error.error.errors) {
  //           this.errorMessages = error.error.errors;
  //         } else {
  //           this.errorMessages.push(error.error);
  //         }
  //       }
  //     })
  //   }
  // }

  toggleQuantityInput(yes: boolean) {
    if (yes) {
      this.quantity.enable()
      this.quantity.reset()
      this.saveQuantitySetting.enable()
      this.saveQuantitySetting.reset()
    }
    else {
      this.quantity.disable()
      this.quantity.reset()
      this.saveQuantitySetting.disable()
      this.saveQuantitySetting.reset()
    }
  }

  OpenSpinner() {
    let dialogRef: MatDialogRef<MatProgressSpinnerModule> = this.dialog.open(MatProgressSpinnerModule, {
      panelClass: '',
      disableClose: true
    });
  }

}
