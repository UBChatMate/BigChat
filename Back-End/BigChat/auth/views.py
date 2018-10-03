import firebase_admin
from firebase_admin import credentials
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import os 

# Create your views here.

cred = credentials.Certificate("./auth/serviceAccountKey.json")

print ("Initializing App")

default_app = firebase_admin.initialize_app(cred)

def index(request):
    return HttpResponse("auth POST")


class Authenticate( View ):
    def get(self, request, auth_type=None):
        return HttpResponse("Invalid Authenticate Request.")

    def post(self, request, auth_type=google):
        return HttpResponse("Google Auth")

    def post(self, request, auth_type=fb):
        return HttpResponse("Facebook Auth")

