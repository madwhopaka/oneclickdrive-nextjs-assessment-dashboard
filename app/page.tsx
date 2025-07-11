import ExploreButton from "./(components)/home/ExploreButton";

export default function Home() {

  return (
<div
  className="relative flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
>
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.5]" style={{ backgroundImage: `url('/images/carRent-lading.jpg')` }}></div>

  {/* Overlay Content */}
  <div className="relative z-10 text-center text-white max-w-3xl">
    <h1 className="text-4xl sm:text-6xl font-bold mb-4">CaRent</h1>
    <p className="text-lg sm:text-2xl mb-8">Rent your dream car anytime, anywhere.</p>
    <ExploreButton />
  </div>
</div>
  );
}
  