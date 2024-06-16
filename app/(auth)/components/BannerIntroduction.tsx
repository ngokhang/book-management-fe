"use client";

import { useRouter } from "next/navigation";

interface IBannerIntroductionProps {}

const BannerIntroduction: React.FunctionComponent<IBannerIntroductionProps> = (
  props
) => {
  const router = useRouter();

  const clickNavigate = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="mt-10">
        <span className="block uppercase text-lg font-bold text-white">
          Introduction
        </span>
        <span className="block mt-5 text-base text-white text-justify break-all">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          vel consequatur natus non sapiente? Officiis nobis expedita iusto
          deserunt maxime earum dolores quibusdam accusamus quaerat, cumque eum,
          ea quisquam architecto!
        </span>
      </div>
      <button
        className="block my-10 px-4 py-2 bg-white rounded hover:opacity-75 transition-opacity"
        onClick={clickNavigate}
      >
        <span className="text-black text-sm font-bold">Have An Account</span>
      </button>
    </>
  );
};

export default BannerIntroduction;
