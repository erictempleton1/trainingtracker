from django.conf.urls import url
from trackerApi.views import WorkoutsViewSet

workouts_list = WorkoutsViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

workout_detail = WorkoutsViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    url(r'^workouts/$', workouts_list, name='workouts-list'),
    url(r'^workouts/(?P<pk>[0-9]+)/$', workout_detail, name='workout-detail'),
]
