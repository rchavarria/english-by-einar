# TASKS
- Create a service to work as an EventBus, with publish and subscribe methods: https://github.com/vladgurovich/angular-event-aggregator/blob/master/angular-event-aggregator.js. Then, remove the $scope and $rootScope from ConceptCardCtrl and use this EventBus
    - Remove $scope and $rootScope from ConceptCardCtrl and use this EventBus
    - Add an #unsubscribe() method

# TODO list
- Write first test about the service that handles EnglishConcepts
- Redesign the card UI: one single image, bigger font, bigger buttons, a big header,...
- Publish the app into Google Play Store (need find big images, big icons, some copy advertising the app, the private and pwd to sign the .apk,...)
- get more mp3's to play
- get some images to show, not just a dog
- Use [ESLint](http://davidwalsh.name/eslint) to lint JavaScript code
- At some point in the future, concat all js files, ¿minimize them?, and include just one file in www/index.html
- Compute code coveraged by tests
- Integrate code coverage with Travis-CI or http://coveralls.io, that seems to work for code coverage metrics

# HOWTO
- Generate splash screens and icons: http://ionicframework.com/blog/automating-icons-and-splash-screens/

# DONE
x Figure out how to configure jslint to avoid warnings on chai expectations like ().to.be.null; It seems jslint can't be configured to do so. There is a big discussion on chai's github, and it seems chai's authors don't want to change it (https://github.com/chaijs/chai/issues/41). dirty-chai and karma-dirty-chai promise to work in a good way, but I wasn't able to make it run.
+ get some mp3's to play
+ Research if there is a way to prevent creating a Media object in a browser, where it fails, if not, there is no way to test the app in a regular browser
+ FIX : when the app is loaded for the first time, there is no concept to show, because first, ConceptCardCtrl is created and then concepts are loaded
+ ConceptCard controller
+ Create some kind of factory to create objects that represent every english term, or concept
+ fix angular app name
+ Integrate project with Travis-CI, to get tests run every git push
+ Create the infraestructure to test the app : karma, mocha, chai, sinon
+ Create a gulp task with (JSHint) JSLint to check all JavaScript code

