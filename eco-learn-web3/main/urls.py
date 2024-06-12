from django.urls import path
from . import views 

app_name = "main"

urlpatterns = [ 
    path("", views.IndexView, name="index"),
    path("create/", views.CreateView, name="create"),
    path("get/<str:address>/", views.GetView, name="get"),
    path("send-reward/", views.SendView, name="send"),
    path("send-asset/", views.SendAssetView, name="send_asset"),
    path("view-rewards/<str:address>/", views.TransactionView, name="transaction"),



] 

