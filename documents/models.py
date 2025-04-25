# models.py
from django.db import models


class Document(models.Model):
    file_name = models.CharField(max_length=255)
    # size = models.IntegerField()
    # user_id = models.IntegerField()
    #
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to="initial_map/")

    def __str__(self):
        return self.file_name
