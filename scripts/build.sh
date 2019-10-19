#!/bin/sh

. /.env

set -ex

apk update
apk add gcc musl-dev gcc libffi-dev zlib-dev jpeg-dev linux-headers mysql-dev

# creating virtual environment
python3 -m venv /venv
. /venv/bin/activate
export $(cat /.env | xargs echo)


pip install -r /requirements.txt
cd /src
python manage.py collectstatic  --clear --noinput

echo "OK"

