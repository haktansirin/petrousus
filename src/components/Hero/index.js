import styles from "./Hero.module.scss";
import IconToken from "@/assets/img/icon-token.svg";
import Image from "next/image";
import Button from "../forms/button";
import Partners from "../Partners";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2 className={`p-1 text-black bg-primary ${styles.heroTitle}`}>
              FAST. RELIABLE.
            </h2>
            <h2 className={styles.heroTitle}>DEFI PLATFORM</h2>
            <div className="flex-vertical text-white mt-3">
              <Image src={IconToken} width="40" height="40" alt="Token" />
              <span className="text-xl">PHASE 1 / 1,253,000 USD RAISED</span>
            </div>
            <div className="flex-vertical mt-3">
              <Button href="/" link>
                Buy Now
              </Button>
              <Button href="/" link outline white>
                Read Whitepaper
              </Button>
            </div>
          </div>
          <div className={styles.heroImage}></div>
        </div>
        <p className="text-xl text-white text-center">
          Building the future of our crypto currency with leading brands
        </p>
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
