"use client";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";
import usePeraWallet from "@/hooks/wallet";
import Image from "next/image";
import {columns} from "@/components/dashboard/TransactionsTable"
import { SlBookOpen } from "react-icons/sl";
import { LiaCoinsSolid } from "react-icons/lia";

import { useGetTransactionsQuery } from "@/redux/services/tokens.service";
const TokenWallet = () => {
  const user = useAppSelector((state) => state?.auth?.user);
  const {
    isConnectedToPeraWallet,
    accountAddress,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  } = usePeraWallet();
  const {data: transactions} = useGetTransactionsQuery(accountAddress, {skip: !isConnectedToPeraWallet});

  const formatResponse = (tdata: any) => {
      return tdata.map((item: any, index: number) => {
        //   item["date"] = new Date(Date.now()).toLocaleString();
          
          return {
            ...item,
            date: new Date(Date.now()).toLocaleDateString(),
            sn: index + 1,
            rewards: 50,
          }
      })
  }
  return (
    <div className="pb-10">
      <div className="md:flex items-center justify-between space-y-3">
        <div>
          <h1 className="font-semibold text-xl">Welcome {user?.firstName}</h1>
          <p className="text-sm">
            Did you know? Recycling one ton of paper saves 17 trees
          </p>
        </div>
        <div className="">
          <Button
            className="bg-defaultgreen h-12 rounded-lg truncate max-w-[200px] block p-3 hover:bg-lime-600"
            onClick={() =>
              isConnectedToPeraWallet
                ? handleDisconnectWalletClick()
                : handleConnectWalletClick()
            }
          >
            {isConnectedToPeraWallet ? accountAddress : "Connect Pera Wallet"}
          </Button>
        </div>
      </div>

      <div className="md:flex justify-between gap-5 h-fit mt-5">
        <div>
          <div className="flex w-full max-w-2xl bg-white rounded-lg p-3 border h-fit">
            <div className="w-1/3">
              <Image
                src="/moneyhand.svg"
                alt=""
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>

            <div className="w-1/3 flex flex-col items-center text-center">
              <Image
                src="/refer&earn.svg"
                className="w-full"
                alt=""
                width={100}
                height={100}
              />
              <h2>Earn 50 tokens every time you refer your friends</h2>
              <Button className="bg-defaultgreen h-12 rounded-lg p-3 mt-4 hover:bg-lime-600">
                Refer Now!
              </Button>
              <div className="flex gap-2 items-center mt-7">
                <span className="w-2 aspect-square bg-lime-300 rounded-full"></span>
                <span className="w-3 aspect-square bg-defaultgreen rounded-full"></span>
                <span className="w-2 aspect-square bg-lime-300 rounded-full"></span>
              </div>
            </div>

            <div className="w-1/3">
              <Image
                src="/coins.svg"
                className="w-full"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="flex gap-5 mt-5 text-sm">
            <div className="bg-white rounded-md border p-4 px-6 w-full max-w-xs">
              <p>Courses Completed</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg">3/20</p>
                <div className="rounded-full h-10 w-10 border flex items-center justify-center border-gray-300">
              <SlBookOpen />
              </div>
              </div>
              <p className="text-xs text-red-600"><span className="bg-red-200 px-1 rounded-full">5%</span> Low</p>
            </div>
            <div className="bg-white rounded-md border p-4 w-full max-w-xs">
              <p>Tokens Earned</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg">12000</p>
                <div className="rounded-full h-10 w-10 border border-gray-300 flex items-center justify-center">
              <LiaCoinsSolid className="size-6" />
              </div>
              </div>
              <p className="text-xs text-green-600"><span className="bg-green-200 px-1 rounded-full">5%</span> Great Job</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm h-full bg-white border rounded-lg">
          <div className="p-3 px-5 border-b">Crypto Conversion</div>
          <div className="border-b p-5">
            <Image
              src="/cryptoconversion.svg"
              className="w-full"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center mb-3">
              <p>Amount</p>
              <p className="border p-2 rounded-md">1000 tokens</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Algo Amount</p>
              <p className="border p-2 rounded-md">14000.847560</p>
            </div>

            <Button disabled={true} className="block mx-auto w-fit mt-5">
              Convert to Algo
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-7 bg-white rounded-md p-5">
        <h4>Transaction History</h4>
        <div className="mt-5">
        {/* {JSON.stringify(transactions)} */}
        <DataTable columns={columns} data={transactions?.transactions.length > 0 ? formatResponse(transactions?.transactions) : []} />
        </div>
      </div>
    </div>
  );
};
export default TokenWallet;
