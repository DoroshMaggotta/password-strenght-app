import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordCheckerService {
  constructor() {}

  getPasswordStrength(password: string): string {
    if (password.length === 0) {
      return 'gray';
    } else if (password.length < 8) {
      return 'red';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(password);

      if ((hasLetters && (hasDigits || hasSymbols)) || (hasDigits && hasSymbols)) {
        return 'green';
      } else {
        return 'yellow';
      }
    }
  }
}
