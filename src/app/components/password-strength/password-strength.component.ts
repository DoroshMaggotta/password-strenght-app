import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordCheckerService } from '../../services/password-checker.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true,
    },
  ],
})
export class PasswordStrengthComponent implements ControlValueAccessor {
  password: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';

  constructor(private passwordCheckerService: PasswordCheckerService) {}

  writeValue(value: any) {
    if (value) {
      this.password = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {}

  checkPasswordStrength() {
    const password = this.password;
    const strength = this.passwordCheckerService.getPasswordStrength(password);
  
    if (password.length === 0) {
      this.section1Color = 'gray';
      this.section2Color = 'gray';
      this.section3Color = 'gray';
    } else if (password.length < 8) {
      this.section1Color = 'red';
      this.section2Color = 'gray';
      this.section3Color = 'gray';
    } else {
      this.section1Color = strength === 'green' ? 'green' : 'red';
      this.section2Color = strength === 'green' || strength === 'yellow' ? 'yellow' : 'gray';
      this.section3Color = strength === 'green' ? 'green' : 'gray';
    }
  
    this.onChange(this.password);
    this.onTouched();
  }
  
}
