#!/bin/bash

# /.github/workflows/generate-release-note.sh
# Script qui permet de créer la release note d'une version

# Récupération de la version actuelle
version=$(git describe --tags --abbrev=0)

# Récupération des messages de commit depuis la dernière version taguée
changelog=$(git log $version..HEAD --pretty=format:"* %s (%h)")

# Génération de la release note
echo "# Release Note - $version" > RELEASE.md
echo "" >> RELEASE.md
echo "## Changelog" >> RELEASE.md
echo "$changelog" >> RELEASE.md
echo "" >> RELEASE.md
echo "Date de publication: $(date)" >> RELEASE.md

# Affichage du contenu de la release note
cat RELEASE.md
