import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';

  checkPasswordStrength() {
    const password = this.password;

    if (password.length === 0) {
      this.section1Color = 'gray';
      this.section2Color = 'gray';
      this.section3Color = 'gray';
    } else if (password.length < 8) {
      this.section1Color = 'red';
      this.section2Color = 'red';
      this.section3Color = 'red';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(password);

      if ((hasLetters && (hasDigits || hasSymbols)) || (hasDigits && hasSymbols)) {
        this.section1Color = 'green';
        this.section2Color = 'green';
        this.section3Color = 'green';
      } else {
        this.section1Color = 'red';
        this.section2Color = 'yellow';
        this.section3Color = 'gray';
      }
    }
  }
}
