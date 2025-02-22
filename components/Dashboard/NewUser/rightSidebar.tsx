import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.css";
import { Pie } from "./progressBar";
import Button from "@/components/Button";

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-[10px] pt-[10px] pr-[10px] w-full">
      <Link
        href={"/"}
        className="bg-white py-5 px-7 flex justify-center w-full text-purple-500 rounded-md"
      >
        <span className="text-center">Go Back to website</span>
      </Link>
      <div className="flex flex-col gap-3 pl-5 pr-3 py-8 bg-white rounded-md w-full">
        <div className="flex flex-col gap-2">
          <p className="text-m">Lute Chongo</p>
          <p className="text-m pb-2 text-yellow-400">User ID: MF00001</p>
          <div className={`${styles.gradDiv}`} />
        </div>
        <div className="flex flex-col items-start gap-5 w-[210px]">
          <div
            className={`${styles.main} flex w-full gap-6 items-center rounded-md py-3 px-4 cursor-pointer`}
            id="repay-loan"
          >
            <Image
              src={"/Icons/Dollar.svg"}
              width={16}
              height={17}
              alt="dollar icon"
            />
            <span className="text-m">Repay Loan</span>
          </div>
          <div
            className={`${styles.main} flex w-full gap-6 items-center rounded-md py-3 px-4 cursor-pointer`}
            id="track-loan"
          >
            <Image
              src={"/Icons/Hourglass.svg"}
              width={24}
              height={24}
              alt="hourglass icon"
            />
            <span className="text-m">Track Loan</span>
          </div>
          <div
            className={`${styles.main} flex gap-3 justify-between items-center rounded-md py-3 px-4 cursor-pointer`}
          >
            <Image
              src={"/Icons/fi-rr-headset.png"}
              width={24}
              height={24}
              alt="headsets icon"
            />
            <span className="text-m">Customer Support</span>
          </div>
          <div id="apply-for-loan" className="w-full">
            <Button variant="primary" text="Apply for Loan" />
          </div>
          <div id="withdraw-amount" className="w-full">
            <Button variant="tertiary" text="Withdraw" size="medium" />
          </div>
        </div>
      </div>
      <div
        id="payment-progress"
        className="flex flex-col items-center mx-auto h-[300px] gap-0"
      >
        <Pie percentage={0} colour="purple" />
        <h4 className="text-center text-gray-200 font-bold text-xl">
          K 0 Left
        </h4>
      </div>
    </div>
  );
};

export default RightSideBar;
