import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "./Description.scss";

const contentData = [
  {
    title: "Hakkımızda",
    description: `Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu, 2011 yılında bilimsel düşünceyi teşvik etmek amacıyla kurulmuş öğrenci topluluğudur. Amacımız, üyelerimizin teknik bilgi ve becerilerini geliştirirken inovatif projeler üretmelerine olanak sağlamaktır. Öğrenciler arasında bilimsel araştırmaları yaygınlaştırmak ve teknoloji dünyasındaki yenilikleri takip ederek farkındalık yaratmak için çeşitli etkinlikler, seminerler ve atölyeler düzenliyoruz. Bilim ve teknolojiyi hayatın her alanına entegre etmek için çalışan dinamik ve yenilikçi bir ekibiz. Geleceğin lider mühendisleri, bilim insanları ve teknoloji uzmanları olarak sorumluluklarımızın bilincindeyiz ve bu doğrultuda hareket ediyoruz.`,
  },
  {
    title: "Misyonumuz",
    description: `Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu olarak misyonumuz, öğrencilere bilimsel ve teknolojik bilgi birikimlerini artıracak bir ortam sunmak ve onları kariyer hayatına en iyi şekilde hazırlamaktır. Çeşitli teknik geziler, söyleşiler, yurt dışı programları ve eğitimlerle üyelerimizin akademik ve profesyonel gelişimini destekliyoruz. CV hazırlama, mülakat hazırlıkları gibi kariyer odaklı eğitimler düzenleyerek, öğrencilerin iş dünyasına güçlü adımlar atmalarını sağlıyoruz. Amacımız, bilimsel araştırmaları ve teknolojik inovasyonları teşvik ederek, öğrencilerimizin kişisel ve mesleki başarılarına katkı sağlamaktır.`,
  },
  {
    title: "Vizyonumuz",
    description: `Topluluğumuzun vizyonu, Ankara Yıldırım Beyazıt Üniversitesi'ni bilim ve teknoloji alanında ulusal ve uluslararası arenada tanınan bir merkez haline getirmektir. Öğrencilerimizi, teknik bilgi ve becerilerle donatarak kariyerlerine emin adımlarla hazırlamayı, yurt içi ve yurt dışı programlarla küresel bakış açısı kazandırmayı hedefliyoruz. Bilimsel söyleşiler, teknik geziler ve kariyer odaklı eğitimlerle üyelerimizi geleceğin lider bilim insanları ve teknoloji uzmanları olarak yetiştirmeyi amaçlıyoruz. Yenilikçi projelerle topluma katkı sunan, sürdürülebilir çözümler üreten bir topluluk olma yolunda ilerliyoruz.`,
  },
];

const Description = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleWidth, setTitleWidth] = useState(0);

  const titlesContainerRef = useRef(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (titlesContainerRef.current) {
        const containerWidth = titlesContainerRef.current.clientWidth;
        setTitleWidth(containerWidth / contentData.length);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  const handleTitleClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div className="about-tabs">
      <div className="titles" ref={titlesContainerRef}>
        {contentData.map((item, index) => (
          <div
            key={item.title}
            className={`subtitle ${
              activeIndex === index ? "active-title" : ""
            }`}
            onClick={() => handleTitleClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="line-slider">
        <motion.div
          className="current-line"
          animate={{
            x: titleWidth * activeIndex,
            width: titleWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      </div>

      <Swiper
        className="description-slider"
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {contentData.map((item) => (
          <SwiperSlide key={item.title} className="description">
            {item.description}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Description;
