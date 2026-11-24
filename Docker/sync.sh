#!/bin/sh
# Recopie le Dockerfile du backend dans Docker/ (la CI echoue si les deux diffèrent)
cd "$(dirname "$0")" && cp ../Back/Dockerfile back/Dockerfile
