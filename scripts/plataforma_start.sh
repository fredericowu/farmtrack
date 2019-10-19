#!/bin/sh


source /venv/bin/activate
export $(cat /.env | xargs echo)

cd /src
uwsgi --http :8000 --module hackingrio.wsgi --static-map /static=/src/static_files_root/
