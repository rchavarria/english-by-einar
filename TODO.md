# TASKS
- get some images to show, not just a dog

# TODO list
- Create a service to work as an EventBus, with publish and subscribe methods: https://github.com/vladgurovich/angular-event-aggregator/blob/master/angular-event-aggregator.js. Then, remove the $scope and $rootScope form ConceptCardCtrl and use this EventBus
- Write first test about the service that handles EnglishConcepts
- get more mp3's to play
- At some point in the future, concat all js files, ¿minimize them?, and include just one file in www/index.html
- Compute code coveraged by tests
- Integrate code coverage with Travis-CI

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

