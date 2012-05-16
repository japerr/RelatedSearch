@ECHO OFF
REM ************************************************************
REM	*	Build the javascript documentation
REM *	using the build configuration defined in build-doc.conf
REM ************************************************************
java -jar build-support/jsdoc-toolkit/jsrun.jar build-support/jsdoc-toolkit/app/run.js -c=build-doc.conf