# TASKS
- ConceptCard controller
++ transform controller is a 'controller as'
++ Before testing, create a factory that controls play/stop of a media file external to the controller
-- test concept card controller (now it's on a separate file)

# TODO list
- FIX : when the app is loaded for the first time, there is no concept to show, because first, ConceptCardCtrl is created and then concepts are loaded
- Write first test about the service that handles EnglishConcepts
- At some point in the future, concat all js files, ¿minimize them?, and include just one file in www/index.html
- Compute code coveraged by tests
- Integrate code coverage with Travis-CI

# HOWTO
- Generate splash screens and icons: http://ionicframework.com/blog/automating-icons-and-splash-screens/

# DONE
+ Create some kind of factory to create objects that represent every english term, or concept
+ fix angular app name
+ Integrate project with Travis-CI, to get tests run every git push
+ Create the infraestructure to test the app : karma, mocha, chai, sinon
+ Create a gulp task with (JSHint) JSLint to check all JavaScript code

