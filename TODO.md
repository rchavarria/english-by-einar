# TASKS
- FIX : when the app is loaded for the first time, there is no concept to show, because first, ConceptCardCtrl is created and then concepts are loaded
-- inject $scope in the controller, $rootScope in the run, and fire and event when the app is ready and concepts loaded
-- listen to that event, and get the next() concept and create a new media from it

# TODO list
- Figure out how to configure jslint to avoid warnings on chai expectations like ().to.be.null;
- Create a service to work as an EventBus, with publish and subscribe methods: https://github.com/vladgurovich/angular-event-aggregator/blob/master/angular-event-aggregator.js. Then, remove the $scope and $rootScope form ConceptCardCtrl and use this EventBus
- get some mp3's to play
- get some images to show, not just a dog
- Write first test about the service that handles EnglishConcepts
- At some point in the future, concat all js files, ¿minimize them?, and include just one file in www/index.html
- Compute code coveraged by tests
- Integrate code coverage with Travis-CI

# HOWTO
- Generate splash screens and icons: http://ionicframework.com/blog/automating-icons-and-splash-screens/

# DONE
+ ConceptCard controller
+ Create some kind of factory to create objects that represent every english term, or concept
+ fix angular app name
+ Integrate project with Travis-CI, to get tests run every git push
+ Create the infraestructure to test the app : karma, mocha, chai, sinon
+ Create a gulp task with (JSHint) JSLint to check all JavaScript code

