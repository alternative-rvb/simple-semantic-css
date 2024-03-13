#!/bin/bash

# Récupère les messages de commit depuis la dernière version taguée
changelog=$(git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"%h %s")

# Écrit la release note dans un fichier
echo "# Release Note" > RELEASE.md
echo "" >> RELEASE.md
echo "$changelog" >> RELEASE.md

# Affiche le contenu de la release note
cat RELEASE.md
