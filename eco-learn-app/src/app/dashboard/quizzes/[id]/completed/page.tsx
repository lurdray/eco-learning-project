"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";
import { useSendRewardMutation } from "@/redux/services/tokens.service";
import usePeraWallet from "@/hooks/wallet";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Completed() {
  const user = useAppSelector((state) => state?.auth?.user);
  const [sendReward, { isLoading }] = useSendRewardMutation(undefined);
  const { accountAddress, handleConnectWalletClick } = usePeraWallet();

  const handleClaimReward = async () => {
    try {
      await toast.promise(
        sendReward({
          address: accountAddress,
          title: "Eco Coin Reward - Understanding Climate Change",
          coins: "1000 eco coins",
        }),
        {
          pending: "Claiming reward...",
          success: "Reward claimed successfully",
          error: "Error claiming reward",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="py-2 space-y-2 w-[100%]">
      <div className="text-center">
        <h1 className="text-2xl font-semibold ">
          Congratulations, {user?.firstName}!
        </h1>
        <p>
          You have successfully completed the quiz on Understanding Climate
          Change
        </p>
      </div>

      <div className="relative  m-auto text-center flex items-center justify-center">
        <div className="relative">
          <Image
            src={"/quizcomplete.svg"}
            alt=""
            // layout="responsive"
            width={100}
            height={100}
            className="z-40 w-full h-[50vh]"
          />
        </div>
        <div className="absolute top-0 text-center w-[70%] h-[100%] flex items-center">
          <div className="relative m-auto text-2xl font-semibold">
            <h1>You have earned</h1>
            <h1>50 Eco Coins</h1>
          </div>
        </div>
      </div>

      <div className="flex relative w-[60%] m-auto justify-center space-x-6">
        <div>
          <Button
            disabled={isLoading}
            className="bg-defaultgreen text-white"
            onClick={() =>
              accountAddress ? handleClaimReward() : handleConnectWalletClick()
            }
          >
            {accountAddress ? "Claim Reward" : "Connect Wallet"}
          </Button>
        </div>
        <div>
          <Button  className="bg-white text-defaultgreen ring-1 ring-defaultgreen hover:text-white">
            <Link href={"/dashboard/courses"}>
            Continue Learning
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
