from rest_framework import serializers

from trackerApi.models import Workouts


class WorkoutsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = '__all__'
