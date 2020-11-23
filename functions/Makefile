ENV ?= dev

setup-env:
	# yarn
	echo "Start setup Environment"
	cp ./environments/$(ENV)/.env .env
	cp ./environments/$(ENV)/admin_credentials.json admin_credentials.json

start:
	make setup-env
	export GOOGLE_APPLICATION_CREDENTIALS="admin_credentials.json"
	firebase emulators:start --only functions

deploy-dev:
	firebase deploy --only functions

deploy-pro:
	firebase deploy --only functions
