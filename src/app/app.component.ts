import { Component } from '@angular/core';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facturacion';
  constructor() {
    I18n.putVocabularies(translations);
    I18n.setLanguage('es');

    I18n.putVocabularies({
      fr: {
        'Sign In': 'Se connecter',
        'Sign Up': "S'inscrire",
      },
      es: {
        'Sign In': 'Registrarse',
        'Sign Up': 'Regístrate',
        'Username': 'Usuario',
        'Enter your Username': 'Escriba su Usuario',
        'Please confirm your Password': 'Por favor confirme su contraseña',
      },
    });
  }
}
