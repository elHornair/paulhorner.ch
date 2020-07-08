#Readme

## Vendors
* I'm using this: https://github.com/BlackrockDigital/startbootstrap-creative (I just downloaded the /dist dir, didn't
  bother to run it properly with NPM)

## Develop
* Run the correct node version: `nvm use` (it will take the version from `.nvmrc`)
* Make sure you're logged in: `firebase login` (use private google account)
* Serve locally: `firebase serve`

## Update data
* Adapt the data in `private/data`
* Remove old data in firebase console
* Temporarily allow `write` in firebase console
* Run the: `prefill_db.js` script
* Disallow `write` in firebase console

## Deploy
* Deploy: `firebase deploy`
* Go to https://paulhorner-205cd.web.app and be happy 🎉
