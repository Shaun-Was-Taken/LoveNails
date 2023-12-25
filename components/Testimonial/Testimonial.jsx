import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Kind Words From Our Clients</h1>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <p>
                “Stopped by kinda late but they were amazing! We got pedicures
                and they removed my old gel nail polish! The girls were so
                great! Enjoyed talking to them about their home country! Will
                DEFINITELY be back!!!”
              </p>
              <p className={styles.author}>- Kendra B. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                “They are new but absolutely good. I was walk-ins and they treat
                me right a way with beautiful smile, the salon is clean and
                hugh. I got my dip nails and it's turned out beautiful, I
                impressed with their attention and how they work gentle on my
                nails. Will tell my friends about this new nail salon in
                Lawrence.”
              </p>
              <p className={styles.author}>- Amy L. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                “Love nails has never given me anything but exceptional service!
                Their techniques are precise and their technicians are truly my
                favorite nail techs i've ever met. Katie is so sweet and always
                makes me feel welcome & does an amazing job every time. Lele did
                my roommates nails perfectly. this is now the only place i'll
                get my nails done in Lawrence KS.”
              </p>
              <p className={styles.author}>- Katherine M. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linebreak}></div>
    </>
  );
}
