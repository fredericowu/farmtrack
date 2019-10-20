#!/bin/sh

. /venv/bin/activate
export $(cat /.env | xargs echo)

cd /src/
python manage.py migrate
python manage.py loaddata data/initial_sample.json
