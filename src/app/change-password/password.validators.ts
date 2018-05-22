import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {

    static wrongPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '123456') {
                    resolve( { wrongPassword: true } );
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static comparePassword(control: AbstractControl) {
        if (control.get('confirmPassword').value !== control.get('newPassword').value) {
            return { passwordNotMatch: true };
        }
        return null;
    }
}
