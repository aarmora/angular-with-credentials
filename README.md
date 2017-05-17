[![npm version](https://badge.fury.io/js/angular-with-credentials.svg)](https://badge.fury.io/js/angular-with-credentials)
# angular-with-credentials
angular-with-credentials is a simple service that you can use to easily add the withCredential flag to angular HTTP requests.

## Install
    
    npm install angular-with-credentials

## How To Use

### Import into your NgModule

```
import { CredentialsService } from 'angular-with-credentials';

...

@NgModule({
    providers: [
        CredentialsService,
        ...
    ]
})
```

Wherever your http calls are made:
```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CredentialsService } from 'angular-with-credentials';

@Injectable()
export class PizaService {
    constructor(
        private http: Http,
        private credentials: CredentialsService) {

        
        if (this.credentials) { // This is here to help with testing so you can pass in null for CredentialsService
            this.credentials.augmentXhrBuild((xhr: any) => {
                xhr.withCredentials = true;
            });
        }

    }

    // Any http calls you have

}
```

## License
ISC License