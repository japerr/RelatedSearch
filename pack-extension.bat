@ECHO OFF
REM ************************************************************
REM	*	Call chrome to package the extension
REM ************************************************************
SET CHROME="%USERPROFILE%\AppData\Local\Google\Chrome\Application\chrome.exe"

IF NOT EXIST %CHROME% (
	ECHO Chrome.exe was not found.
	PAUSE
) ELSE (
	IF NOT EXIST ".\build" (
		MKDIR ".\build"
	)
	
	IF EXIST "%CD%\build\src.pem" (
		REM build package with existing extension key
		%CHROME% --pack-extension="%CD%\src" --pack-extension-key="%CD%\build\src.pem" --no-message-box
	) ELSE (
		REM build package and create new extension key
		%CHROME% --pack-extension="%CD%\src" --no-message-box
		move "%CD%\src.pem" "%CD%\build\src.pem"
	)
	
	IF EXIST "%CD%\src.crx" (
		move /Y "%CD%\src.crx" "%CD%\build\src.crx"
	)
)