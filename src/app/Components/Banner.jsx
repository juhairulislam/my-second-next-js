import Image from 'next/image';
import Link from 'next/link';

const FoodBanner = () => {
  return (
    <section className="relative w-full h-[550px] flex items-center overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/054/611/336/small/wide-angle-foodgraphy-for-restaurant-with-copy-space-photo.jpg"
          alt="Healthy Delicious Food"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="opacity-90"
        />
        {/* Gradient Overlay: ছবির সাথে ম্যাচ করে ডার্ক ওভারলে */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Healthy Meals <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
              For Your Daily Life
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Taste the freshness in every bite. We provide chef-crafted meals made from 100% organic ingredients, delivered hot and fresh.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href='/posts' className="px-10 py-4 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-orange-900/20">
              Order Now
            </Link>
            <Link href='/posts' className="px-10 py-4 border border-white/40 hover:bg-white/10 backdrop-blur-md text-white font-semibold rounded-full transition-all duration-300">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodBanner;