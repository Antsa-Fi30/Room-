from django.core.management.base import BaseCommand
import os
from django.conf import settings
from documents.models import Document


class Command(BaseCommand):
    help = "Vérifie si les fichiers de la base existent sur le disque"

    def handle(self, *args, **kwargs):
        missing_files = []

        for doc in Document.objects.all():
            print(f"ID: {doc.id} | Titre: {doc.file_name} | Fichier: {doc.file}")
            file_path = os.path.join(settings.MEDIA_ROOT, doc.file.name)
            if not os.path.isfile(file_path):
                missing_files.append(doc.file.name)

        if missing_files:
            self.stdout.write("❌ Fichiers manquants :")
            for f in missing_files:
                self.stdout.write(f"- {f}")
        else:
            self.stdout.write("✅ Tous les fichiers sont présents sur le disque.")
