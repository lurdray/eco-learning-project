from utils import get_accounts, get_algod_client
from algosdk import account, mnemonic
from algosdk import transaction
from typing import Dict, Any
import json
from base64 import b64decode

from algosdk import transaction
from algosdk.v2client import algod


def send(address, private_key, address2, amount, note):
    #CONNECT TO NODE
    # example: ALGOD_CREATE_CLIENT
    # Create a new algod client, configured to connect to our local sandbox
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


    #############


    ####SEND

    params = algod_client.suggested_params()
    unsigned_txn = transaction.PaymentTxn(
        sender=address,
        sp=params,
        receiver=address2,
        amt=amount,
        note=note,
    )
    # example: TRANSACTION_PAYMENT_CREATE

    # example: TRANSACTION_PAYMENT_SIGN
    # sign the transaction
    signed_txn = unsigned_txn.sign(private_key)
    # example: TRANSACTION_PAYMENT_SIGN

    # example: TRANSACTION_PAYMENT_SUBMIT
    # submit the transaction and get back a transaction id
    txid = algod_client.send_transaction(signed_txn)
    print("Successfully submitted transaction with txID: {}".format(txid))

    # wait for confirmation
    txn_result = transaction.wait_for_confirmation(algod_client, txid, 4)

    print(f"Transaction information: {json.dumps(txn_result, indent=4)}")
    print(f"Decoded note: {b64decode(txn_result['txn']['txn']['note'])}")
    # example: TRANSACTION_PAYMENT_SUBMIT
    
    return txid