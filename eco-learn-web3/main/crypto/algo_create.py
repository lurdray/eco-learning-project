from utils import get_accounts, get_algod_client
from algosdk import account, mnemonic
from algosdk import transaction
from typing import Dict, Any
import json
from base64 import b64decode

from algosdk import transaction
from algosdk.v2client import algod


def create_wallet():
    ##CREATE WALLET
    # example: ACCOUNT_GENERATE
    private_key, address = account.generate_account()
    print(f"address: {address}")
    print(f"private key: {private_key}")
    print(f"mnemonic: {mnemonic.from_private_key(private_key)}")
    ## example: ACCOUNT_GENERATE

    data = {
        "private_key": private_key,
        "address": address,
    }
    return data



