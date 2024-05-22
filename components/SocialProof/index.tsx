import styles from "../../styles/socialProof.module.css";

const SocialProof = () => {
  return (
    <section className="font-Montserrat flex flex-col">
      <div className="flex justify-between gap-4 bg-yellow-300 h-[255px] w-full">
        <div className={`relative w-[650px]`}>
          <div className={`${styles.rightText}`} />
          <div className="absolute top-[25%] left-[12%] border-left-2 border-white pr-[43px]">
            <h3 className="font-700 font-extrabold text-3xl leading-14 text-left">
              Trusted By Thousands Real People, Real Results
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center w-3/5 px-4">
          <span className="flex flex-col gap-5 items-center justify around w-1/3">
            <p className="font-600 text-3xl font-bold">3 years</p>
            <small className="text-[18px]">Experience</small>
          </span>
          <span className="flex flex-col gap-5 items-center justify around w-1/3">
            <p className="font-600 text-3xl font-bold">Over K 5M</p>
            <small className="text-[18px]">Loan disbursed</small>
          </span>
          <span className="flex flex-col gap-5 items-center justify around w-1/3">
            <p className="font-600 text-3xl font-bold">3.5 k </p>
            <small className="text-[18px]">Registered users</small>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between py-12">
        <div className="intro text-center gap-4">
          <h2 className="h3 font-600 font-bold text-3xl pb-6">
            Empowering You with Strong Partnerships
          </h2>
          <p className="text-gray-400">
            We believe in collaboration and excellence. Discover our trusted
            partners and the awards recognizing our achievements.
          </p>
        </div>
        <div>icons</div>
      </div>
      <div>Leadership Recognition</div>
    </section>
  );
};

export default SocialProof;
