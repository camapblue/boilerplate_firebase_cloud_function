ENV ?= dev

setup-env:
	# yarn
	echo "Start setup Environment"
	cp ./environments/$(ENV)/env.json env.json
	cp ./environments/$(ENV)/admin_credentials.json admin_credentials.json

config-vars:
	firebase functions:config:unset env
	firebase functions:config:set env="$$(cat env.json)"

start:
	make setup-env
	make config-vars
	firebase functions:config:get > .runtimeconfig.json
	export GOOGLE_APPLICATION_CREDENTIALS="admin_credentials.json"
	firebase emulators:start --only functions

deploy-dev:
	make setup-env
	make config-vars
	firebase deploy --only functions

deploy-pro:
	make setup-env
	make config-vars
	firebase deploy --only functions
