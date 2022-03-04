import dynamic from "next/dynamic";
import anime from "animejs/lib/anime.es.js";
import Letterize from "letterizejs";
import { useEffect } from "react";

const Vinyls = dynamic(() => import("./vinyls"));

const HeroBanner = () => {
  const drops = [
    {
      title: "Standard Mint",
      img: "/img/vinyl/Mint.png",
      text: "Redeem your mint vinyl. This vinyl will be redeemable in the future for SoundMint tokens.",
      size: "1 NFT = 1 Mint Vinyl",
      release: "Coming Soon",
      link: {
        text: "Mint Now",
        // path: "/drop-details",
      },
      border: "border-4 border-brightGreen",
    },
    {
      title: "Deluxe Mint",
      img: "/img/vinyl/Mint.png",
      text: "Redeem 2 mint vinyls. This vinyl will be redeemable in the future for SoundMint tokens.",
      size: "5 NFT = 2 Mint Vinyl",
      release: "Coming Soon",
      link: {
        text: "Mint Now",
        // path: "/drop-details",
      },
      border: "border-4 border-brightGreen",
    },
    {
      title: "Gold Mint",
      img: "/img/vinyl/Gold.png",
      text: "Redeem 2 mint vinyls and a gold vinyl. These vinyls will be redeemable in the future for SoundMint tokens. Gold vinyls hold a weighted value much higher than mint vinyls.",
      size: "10 NFT = 2 Mint Vinyl ± 1 Gold Vinyl",
      release: "Coming Soon",
      link: {
        text: "Mint Now",
        // path: "/drop-details",
      },
      border: "border-4 border-gold",
    },
    
    {
      title: "Gold Deluxe Mint",
      img: "/img/vinyl/Gold.png",
      text: "Redeem 2 mint vinyls and 2 gold vinyls. These vinyls will be redeemable in the future for SoundMint tokens. Gold vinyls hold a weighted value much higher than mint vinyls.",
      size: "20 NFT = 4 Mint Vinyl ± 2 Gold Vinyl",
      release: "Coming Soon",
      link: {
        text: "Mint Now",
        // path: "/drop-details",
      },
      border: "border-4 border-gold",
    },
  ];

  useEffect(() => {
    async function animateText() {
      const test = new Letterize({
        targets: "#animateMe",
      });

      var animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(50),
        loop: true,
      });

      animation
        .add({
          translateY: -7,
        })
        .add({
          translateY: 0,
        });
    }
    animateText();
  }, []);

  return (
    <section className="pb-20 bg-black text-white">
      <div className="wrapper pt-5 pb-10">
        <h3
          className="text-[45px] lg:text-[60px] uppercase font-bold"
          id="animateMe"
        >
          Vinyl Drop
        </h3>
        <div className="pt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-16 lg:gap-6">
          {drops.map((drop, i) => (
            <Vinyls drop={drop} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
