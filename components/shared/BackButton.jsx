import { useRouter } from "next/navigation";
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <button
      onClick={handleGoBack}
      className="absolute top-11 left-6 flex items-center gap-3 text-zinc-200"
    >
      <span className="bg-dark-700 p-2 flex items-center justify-center border border-dark-300 rounded-full">
        <HiArrowSmallLeft size={20} />
      </span>
      <span>Go Back</span>
    </button>
  );
};

export default BackButton;
