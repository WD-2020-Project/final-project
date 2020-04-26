from rest_framework import generics
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from django.contrib.auth.models import User

from api.serializers import UserSerializer, SuperUserSerializer, CommentSerializer


class UserListAPIVIew(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('username',)

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SuperUserListAPIView(UserListAPIVIew):
    serializer_class = SuperUserSerializer

class SuperUserDetailListAPIView(UserDetailAPIView):
    serializer_class = SuperUserSerializer

