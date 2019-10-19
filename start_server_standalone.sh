#!/bin/bash
source ../venv/bin/activate
export $(cat .env | xargs echo) 
python project/plataforma/manage.py runserver 0.0.0.0:8888

