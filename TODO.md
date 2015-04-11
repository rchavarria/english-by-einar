# TASKS
- Publish the app into Google Play Store (need find big images, big icons, some copy advertising the app, the private and pwd to sign the .apk,...)
    - http://ionicframework.com/docs/guide/publishing.html
    - Seems easy: `cordova build --release android`. Then, sign the .apk and align it. Then, Google Play issues

# TODO list
- Take a look to a new library for PubSub events and topics (replace my implementation with that)
- get more mp3s to play
- get some images to show (1000x1000 px)
- Use [ESLint](http://davidwalsh.name/eslint) to lint JavaScript code
- Create a service to work as an EventBus, with publish and subscribe methods: https://github.com/vladgurovich/angular-event-aggregator/blob/master/angular-event-aggregator.js. Then, remove the $scope and $rootScope from ConceptCardCtrl and use this EventBus
    + Remove $scope and $rootScope from ConceptCardCtrl and use this EventBus
    - Add an #unsubscribe() method
    - Remove duplication in the name of the event. Event names could be in a variable inside EventBus factory
    - Make this.subscribers property private
- Format code and use best AngularJS practices by John Papa
- At some point in the future, concat all js files, ¿minimize them?, and include just one file in www/index.html
- Compute code coveraged by tests
- Integrate code coverage with Travis-CI or http://coveralls.io, that seems to work for code coverage metrics
- Figure out how to change the name of the .apk file generated with commands such as `cordova build --release android`

# HOWTO
- Generate splash screens and icons: http://ionicframework.com/blog/automating-icons-and-splash-screens/

# DONE
+ Redesign the card UI: one single image, bigger font, bigger buttons, a big header,...
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

