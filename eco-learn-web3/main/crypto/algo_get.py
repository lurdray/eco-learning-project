from utils import get_accounts, get_algod_client
from algosdk import account, mnemonic
from algosdk import transaction
from typing import Dict, Any
import json
from base64 import b64decode

from algosdk import transaction
from algosdk.v2client import algod



def get_balance(address):

    #CONNECT TO NODE

    algod_address = "http://localhost:4001"
    algod_address = "https://mainnet-idx.algonode.cloud"
    algod_address = "https://testnet-api.algonode.cloud"
    algod_token = "a" * 64
    algod_client = algod.AlgodClient(algod_token, algod_address)

    # Or, if necessary, pass alternate headers

    # Create a new client with an alternate api key header
    special_algod_client = algod.AlgodClient(
        "", algod_address, headers={"X-API-Key": algod_token}
    )
    # example: ALGOD_CREATE_CLIENT

    print(special_algod_client)
    #############


    #GET BALANCE

    account_info: Dict[str, Any] = algod_client.account_info(address)
    print(f"Account balance: {account_info.get('amount')} microAlgos")

    return account_info.get('amount')
