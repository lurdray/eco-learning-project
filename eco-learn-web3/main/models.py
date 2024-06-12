from django.db import models

class Transaction(models.Model):
    title = models.CharField(max_length=255, default="")
    coins = models.CharField(max_length=255, default="")
    receiver = models.TextField(default="")
    hash = models.TextField(default="")
    hash_link = models.TextField(default="")

    def __str__(self):
        return self.hash
