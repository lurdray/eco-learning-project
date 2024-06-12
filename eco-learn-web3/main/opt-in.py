
from utils import get_accounts, get_algod_client
from algosdk import account, mnemonic
from algosdk import transaction
from typing import Dict, Any
import json
from base64 import b64decode

from algosdk import transaction
from algosdk.v2client import algod
from algosdk.encoding import decode_address

algod_address = "http://localhost:4001"
algod_address = "https://mainnet-idx.algonode.cloud"
algod_address = "https://testnet-api.algonode.cloud"
algod_token = "a" * 64
algod_client = algod.AlgodClient(algod_token, algod_address)

recipient_address = "EWM76KDC7ZXU4JOG5A5QBYGL5HFG2GCVYNJ5HLQRHOSY26IBX37BMT5NXA"
recipient_private_key = "IG2T23a7vY9RswEaEt0F9b99qcZkDy9+eu6ZisjgLgklmf8oYv5vTiXG6DsA4Mvpym0YVcNT064RO6WNeQG+/g=="
asset_id = 680072527



# Get the parameters for the transaction
params = algod_client.suggested_params()

# Create the asset opt-in transaction
txn = transaction.AssetTransferTxn(
    sender=recipient_address,
    sp=params,
    receiver=recipient_address,
    amt=0,
    index=asset_id
)

# Sign the transaction with the recipient's private key
signed_txn = txn.sign(recipient_private_key)

# Send the transaction
txid = algod_client.send_transaction(signed_txn)
print(f"Opt-in Transaction ID: {txid}")

# Wait for confirmation
transaction_response = transaction.wait_for_confirmation(algod_client, txid)
print("Opt-in transaction confirmed in round", transaction_response['confirmed-round'])