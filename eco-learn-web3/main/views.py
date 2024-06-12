from django.http import HttpResponse, JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view
from rest_framework.response import Response
  
from main.models import Transaction
from main.algo_app import *


@api_view(['GET'])
def IndexView(request):
    if request.method == 'GET':
        data = {
            "status": True,
            "message": "ECO COIN",
            "status_code": 201,
        }
        return Response(data)
    



@api_view(['POST'])
def CreateView(request):
    if request.method == 'POST':
        wallet = create_wallet()

        data = {
            "status": True,
            "private_key": wallet["private_key"],
            "address": wallet["address"],
            "status_code": 201,
        }
        return Response(data)
    



@api_view(['GET'])
def GetView(request, address):
    if request.method == 'GET':
        wallet = get_balance(address)

        data = {
            "status": True,
            "amount": wallet,
            "status_code": 201,
        }
        return Response(data)
    


@api_view(['POST'])
def SendView(request):
    if request.method == 'POST':
        title = request.data["title"]
        coins = request.data["coins"]
        
        address = "EWM76KDC7ZXU4JOG5A5QBYGL5HFG2GCVYNJ5HLQRHOSY26IBX37BMT5NXA" # request.data["address"]
        private_key = "IG2T23a7vY9RswEaEt0F9b99qcZkDy9+eu6ZisjgLgklmf8oYv5vTiXG6DsA4Mvpym0YVcNT064RO6WNeQG+/g==" # request.data["private_key"]
        address2 = request.data["address"]
        amount = 100000 # request.data["amount"]
        note = "Testnet token sent from ECO LEARN" # request.data["note"]

        hash = send(address, private_key, address2, amount, note)
        transaction = Transaction.objects.create(title=title, coins=coins, receiver=address2, 
                hash=hash, hash_link="https://app.dappflow.org/explorer/transaction/" + hash)
        transaction.save()


        data = {
            "status": True,
            "message": hash,
            "status_code": 201,
        }
        return Response(data)
    



@api_view(['GET'])
def TransactionView(request, address):
    if request.method == 'GET':
        transactions = Transaction.objects.filter(receiver=address)

        transaction_list = []
        for item in transactions:
            transaction = {
                "title": item.title,
                "coins": item.coins,
                "receiver": item.receiver,
                "hash": item.hash,
                "hash_link": item.hash_link
            }
            transaction_list.append(transaction)

        data = {
            "status": True,
            "transactions": transaction_list,
            "status_code": 201,
        }
        return Response(data)
    


@api_view(['POST'])
def SendAssetView(request):
    if request.method == 'POST':
        sender_address = request.data["sender_address"]
        sender_private_key = request.data["sender_private_key"]
        receiver_address = request.data["receiver_address"]
        asset_id = request.data["asset_id"]
        receiver_address = request.data["receiver_address"]
        amount = request.data["amount"]
        note = request.data["note"]

        hash = send_asset(sender_address, sender_private_key, receiver_address, asset_id, amount, note)
        transaction = Transaction.objects.create(receiver=receiver_address, 
                hash=hash, hash_link="https://app.dappflow.org/explorer/transaction/" + hash)
        transaction.save()


        data = {
            "status": True,
            "message": hash,
            "status_code": 201,
        }
        return Response(data)
    
