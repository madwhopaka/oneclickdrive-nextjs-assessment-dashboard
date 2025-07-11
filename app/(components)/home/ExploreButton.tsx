"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ExploreButton = () => {

  const { user, isLoaded } = useUser();
  const router = useRouter();

  const handleExploreClick = () => {
    console.log("Explore button clicked");
    if (!isLoaded) return;
    if (user) {
      router.push("/dashboard");
    } else {
      router.push('/auth')
    }
  };
  
  return (
    <div>
      <button
        onClick={handleExploreClick}
        className="px-6 py-3 bg-[#6c47ff] text-white cursor-pointer rounded-full text-lg font-medium"
      >
        Explore Dashboard
      </button>
    </div>
  );
};

export default ExploreButton;
