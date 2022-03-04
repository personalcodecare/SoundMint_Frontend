import Image from "next/image";
import Link from "next/dist/client/link";


const SoundmintVinyls = ({}) => {
  const mintVinyl = [
    {
      image: <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0ZM27.9996 15.9474C21.3433 15.9474 15.9472 21.3434 15.9472 27.9998C15.9472 34.6562 21.3433 40.0522 27.9996 40.0522C34.656 40.0522 40.052 34.6562 40.052 27.9998C40.052 21.3434 34.656 15.9474 27.9996 15.9474Z" fill="#5FFECD"/>
      <rect x="25.6777" y="25.6812" width="4.64157" height="4.64157" rx="2.32078" fill="#5FFECD"/>
      </svg>
    },
  ];
    const goldVinyl = [
      {
        image: <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0ZM27.9996 15.9474C21.3433 15.9474 15.9472 21.3434 15.9472 27.9998C15.9472 34.6562 21.3433 40.0522 27.9996 40.0522C34.656 40.0522 40.052 34.6562 40.052 27.9998C40.052 21.3434 34.656 15.9474 27.9996 15.9474Z" fill="#FBEB6F"/>
        <rect x="25.6777" y="25.6812" width="4.64157" height="4.64157" rx="2.32078" fill="#FBEB6F"/>
        </svg>
        
      },
  ];
  return (
    <section className="mt-10 bg-white text-black pb-16">
      <div className="wrapper">
        <h3 className="text-[35px] md:text-[40px] w-full lg:max-w-full pt-14 pb-5 text-left font-bold">
          What are the SoundMint&nbsp;Vinyls?
        </h3>
        <p className="mb-5 font-mono">The SoundMint Vinyls are rewarded to SoundMint’s earliest supporters & community members, giving them direct exposure to SoundMint’s value as a platform through future opportunities such&nbsp;as:</p>
        <ul className="mb-5 pl-5 list-disc">
          <li>Exposure to Platform&nbsp;Earnings</li>
          <li>Governance</li>
          <li>Access to Exclusive Partnerships &&nbsp;Merchandise</li>
          <li>Exclusive IRL Token-Gated&nbsp;Events</li>
          <li>& Much&nbsp;More</li>
        </ul>
        <p className="mb-5 font-mono">Allowing early supporters & community members that hold the WE ARE KLOUD NFT collection to become core stakeholders of&nbsp;SoundMint.</p>
        <h3 className="text-[35px] md:text-[40px] w-full lg:max-w-full pb-5 text-left font-bold">
        The&nbsp;Variants
        </h3>
        <p className="mb-5 font-mono">There are three variants to the vinyls. Each variant represents differing weighted values to the holder. Mint Vinyl is common, while Gold Vinyl is rare. The rarest and most valuable is the Onyx&nbsp;Vinyl.</p>
        <div className="mb-5">
          <p className="font-mono">Mint = Standard Value</p>
          <p className="font-mono">Wallet must hold 1 NFT to claim 1</p>
          <p className="font-mono">5 or 10 NFTs to claim 2</p>
          <p className="font-mono">20 NFTs to claim 4</p>
        </div>
        <div className="mb-5">
          <p className="font-mono">Gold = High Value</p>
          <p className="font-mono">Wallet must hold 10 NFTs to claim 1</p>
          <p className="font-mono">5 or 10 NFTs to claim 2</p>
          <p className="font-mono">20 NFTs to claim 2</p>
        </div>
        <div className="mb-5">
          <p className="font-mono">Onyx = The Most Value</p>
          <p className="font-mono">Only the rarest of supporters are rewarded this Vinyl</p>
        </div>
        <div className="column-1">
          <div className="mt-20 text-left">
            <div className=" mb-5 w-full flex md:items-start gap-3">
              <p className="w-[192px] font-mono text-base lg:text-sm uppercase">
                1 nft = 1 Mint&nbsp;Vinyl
              </p>
              <div className="min-w-[90px] grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4">
                {mintVinyl.map((item, i) => (
                  <div key={i} className="w-[32px] mb-4 md:mb-0 md:mr-8">
                    {item.image}
                  </div>
                ))}
              </div>
          </div>
          <div className="text-left">
            <div className="mb-5 w-full flex md:items-start gap-3">
                <p className="w-[192px] font-mono text-base lg:text-sm uppercase">
                  5 nft = 2 Mint&nbsp;Vinyl
                </p>
                <div className="min-w-[90px] grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4">
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" text-left">
            <div className="mb-5 w-full flex md:items-start gap-3">
                <p className="max-w-[192px] font-mono text-base lg:text-sm uppercase">
                  10 nft = 2 Mint Vinyl ± 1 Gold&nbsp;Vinyl
                </p>
                <div className="min-w-[90px] grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4">
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <div className=" text-left">
            <div className="mb-20 md:mb-12 w-full flex md:items-start gap-3">
                <p className="max-w-[192px] font-mono text-base lg:text-sm uppercase">
                  20 nft = 3 Mint Vinyl ± 2 Gold&nbsp;Vinyl
                </p>
                <div className="min-w-[90px] grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
                  {mintVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundmintVinyls;
