# AngularMaterialLoginTemplate

ssh-keygen -t rsa -C "fairvinay@gmail.com"

cat ~/.ssh/id_rsa.pub | clip

cat ./id_rsa.pub | clip
or download the file from  https://github.com/settings/keys your username fairvinay 

no need of this 
openssl rsa -des3 -in id_rsa -out id_rsa.key.new
openssl rsa -des3 -in id_rsa -out id_rsa.key.new
Could not read private key from id_rsa


eval "$(ssh-agent -s)"
ssh-add ./id_rsa

ssh -T git@github.com
then
 git remote set-url origin git@github.com:Fairvinay/nodebootsrtapejsworker.git
then git push -u origin master will work 

This project was generated with pass phase bench123 [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
