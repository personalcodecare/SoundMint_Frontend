import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/shared/header"));

const Home = () => {

  return (
    <>
    <Header title="Roadmap | SoundMint" />
    <div className="md:h-[72vh] mb-5">
      <div className="flex w-full bg-black md:h-[70vh] min-h-[600px] justify-center">
        <div className="wrapper pt-5 md:pb-40 xl:pb-56  mx-auto">
        <h3 className="text-[45px] lg:text-[60px] uppercase font-bold text-white">Roadmap</h3>
          <img className='hidden md:block relative mt-20 pb-40' src='/img/roadmap/home/roadmap.png'/>
          <img className='sm:flex md:hidden relative mt-20 pb-20' src='/img/roadmap/home/roadmap-sm.png'/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
