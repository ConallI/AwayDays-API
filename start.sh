#!/usr/bin/env bash
docker-compose build --no-cache
docker-compose up -d
docker exec -ti awaydays-api_app npm run migrate
docker exec -ti awaydays-api_app npm run seed