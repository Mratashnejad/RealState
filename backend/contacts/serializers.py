from rest_framework import serializers
from .models import Contact


class ContactSerializer (serializers.ModelSerializers):
    class Meta:
        model : Contact
        fields : '__all__'

