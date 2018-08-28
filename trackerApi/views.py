from rest_framework import viewsets

from trackerApi.models import Workouts
from trackerApi.serializers import WorkoutsSerializer


class WorkoutsViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutsSerializer

    def get_queryset(self):
        queryset = Workouts.objects.all()
        return queryset
