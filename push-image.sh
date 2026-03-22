#!/bin/bash

# # Atualiza o repositório local com as mudanças mais recentes
# git pull

# # Constrói a imagem Docker
# docker build -t starti-dashboard-app .

# # Solicita ao usuário que digite a senha do Docker Hub
echo "Digite sua senha do Docker Hub:"
read -s DOCKER_PASSWORD  # A opção '-s' oculta a entrada de senha no terminal

# Realiza login no Docker Hub
echo "$DOCKER_PASSWORD" | docker login -u diogocamilo --password-stdin

docker tag starti-dashboard-app diogocamilo/starti-dashboard-app

# Empurra a imagem Docker para o Docker Hub
docker push diogocamilo/starti-dashboard-app
