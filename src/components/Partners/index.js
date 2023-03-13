import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./Partners.module.scss";
import PartnerInsiderMonkey from "@/assets/img/partner-insider-monkey.png";
import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 2,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 3,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 4,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 5,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 6,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 7,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 8,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 9,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
    {
      id: 10,
      name: "Insider Monkey",
      image: PartnerInsiderMonkey,
    },
  ];

  return (
    <div className={styles.partner}>
      <Swiper spaceBetween={30} slidesPerView={6} modules={[Autoplay]} autoplay>
        {partners.map((partner) => (
          <SwiperSlide className={styles.partnerItem} key={partner.id}>
            <Image
              src={partner.image}
              width="100%"
              height="100%"
              alt={partner.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
