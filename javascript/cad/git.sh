#!/usr/bin/env bash
TEXTCOMMIT="update"

if [[ "$1" == "-c" && "$2" != "" ]]
	then
		TEXTCOMMIT=$2
fi

git add .
git commit -m "$TEXTCOMMIT"
git push origin master -f