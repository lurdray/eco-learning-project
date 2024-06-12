from main.utils import get_accounts, get_algod_client
from algosdk import account, mnemonic
from algosdk import transaction
from typing import Dict, Any
import json
from base64 import b64decode

from algosdk import transaction
from algosdk.v2client import algod
from algosdk.encoding import decode_address

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

    print(special_algod_client)
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




def is_opted_in(client, address, asset_id):
    account_info = client.account_info(address)
    for asset in account_info['assets']:
        if asset['asset-id'] == asset_id:
            return True
    return False


def send_asset(sender_address: str, sender_private_key: str, receiver_address: str, asset_id: int, amount: int, note: str = "") -> str:
    # Set up Algorand client connection
    algod_address = "https://testnet-api.algonode.cloud"
    algod_token = "a" * 64  # Replace with your actual Algorand token
    
    algod_client = algod.AlgodClient(algod_token, algod_address)
    
    # Get transaction parameters
    params = algod_client.suggested_params()


    

    # Opt-in the recipient to the asset if not already opted in
    if not is_opted_in(algod_client, recipient_address, asset_id):
        recipient_address = 
        recipient_private_key
        asset_id = 



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

    
    # Create the asset transfer transaction
    unsigned_txn = transaction.AssetTransferTxn(
        sender=sender_address,
        sp=params,
        receiver=receiver_address,
        amt=amount,
        index=asset_id,
        note=note.encode()
    )
    
    # Sign the transaction
    signed_txn = unsigned_txn.sign(sender_private_key)
    
    # Submit the transaction
    txid = algod_client.send_transaction(signed_txn)
    print(f"Successfully submitted transaction with txID: {txid}")
    
    # Wait for transaction confirmation
    txn_result = transaction.wait_for_confirmation(algod_client, txid, 4)
    
    print(f"Transaction information: {json.dumps(txn_result, indent=4)}")
    if 'note' in txn_result['txn']['txn']:
        print(f"Decoded note: {b64decode(txn_result['txn']['txn']['note']).decode()}")
    
    return txid
