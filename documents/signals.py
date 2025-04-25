import os
from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import Document


@receiver(post_delete, sender=Document)
def delete_file(sender, instance, **kwargs):
    if instance.file:
        if os.path.isfile(instance.file.path):
            os.remove(instance.file.path)
