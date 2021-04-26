from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions, AllowAny
from rest_framework.decorators import api_view, renderer_classes

from .models import User

# USER

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request, format='json'):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            # return Response(status=status.HTTP_400_BAD_REQUEST)
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

class GetCurrentLoggedIn(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format='json'):
        user = request.user
        # user = User.objects.get(id=request.user.id)

        return JsonResponse({
            "name": user.name,
            "email": user.email,
        })