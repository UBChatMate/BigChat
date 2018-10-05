from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return HttpResponse("auth POST")

# Create your views here.

# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import auth

# cred = credentials.Certificate("./auth/serviceAccountKey.json")

# print ("Initializing App")

# default_app = firebase_admin.initialize_app(cred)

# class Authenticate( View ):
#     def get(self, request, auth_type=None):
#         return HttpResponse("Invalid Authenticate Request.")

#     def post(self, request, auth_type=google):
#         firebase_admin.auth._get_auth_service
#         return HttpResponse("Google Auth")

#     def post(self, request, auth_type=fb):
#         return HttpResponse("Facebook Auth")

