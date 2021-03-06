from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Lead(models.Model):
    name= models.CharField(max_length=200)
    email = models.EmailField(unique=True, max_length=200)
    message = models.CharField(max_length=400, blank=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
