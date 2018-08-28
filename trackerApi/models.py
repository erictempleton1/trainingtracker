from django.db import models


class Workouts(models.Model):

    WORKOUT_TYPES = [
        ('trainer', 'Trainer'),
        ('road', 'Road'),
    ]
    EFFORT_TYPES = [
        ('easy', 'Easy'),
        ('moderate', 'Moderate'),
        ('hard', 'Hard'),
    ]

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100, blank=True, default='')
    workout_type = models.CharField(max_length=100, choices=WORKOUT_TYPES, default='road')
    effort_types = models.CharField(max_length=100, choices=EFFORT_TYPES, default='easy')
    distance = models.FloatField(blank=True)
    speed = models.FloatField(blank=True)
    time = models.FloatField(blank=True)
    notes = models.TextField()

    class Meta:
        ordering = ('created',)
