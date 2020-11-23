curl --location --request POST https://hooks.slack.com/services/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 \
--header 'Content-Type: application/json' \
--data-raw "{
    \"text\":\"$1\",
    \"username\":\"CloudFunctionBot\"
}"