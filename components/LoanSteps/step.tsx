import Image from "next/image";
import { type LoanStepDataType } from "@/types";
import styles from "../../styles/landingPage.module.css";

const Step = ({ step, icon, title, text }: LoanStepDataType) => {
  return (
    <div className="flex items-start justify-between gap-6 font-Montserrat">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-purple-400 rounded-[50%] px-6 py-3 text-white text-2xl font-extrabold">
          {step}
        </div>
        {step < 4 ? (
          <Image
            src={"/Images/LandingPage/dotted-arrow.png"}
            alt="step arrow"
            width={10}
            height={80}
          />
        ) : (
          <>{""}</>
        )}
      </div>
      <div className="flex items-start gap-3 text-left w-[375px]">
        <div className="flex items-start gap-2">
          <div className={`${styles.stepGrad} w-[3px] h-[60px]`} />
          <Image src={icon} alt="step icon" width={50} height={50} />
        </div>
        <div className="m-0">
          <span className="font-bold">{title}</span>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
