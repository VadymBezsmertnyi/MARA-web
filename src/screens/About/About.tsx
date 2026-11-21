import React, { FunctionComponent } from "react";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  const nameApp = "M.A.R.A.(Moto Auto Road Assistant)";
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        {i18n._("About {nameApp}", { nameApp })}
      </h1>
      <p className={styles.title}>
        {i18n._(
          `Welcome to {nameApp} – your mobile companion in the world of cars and motorcycles! This app is designed for those who want to easily and conveniently buy and sell vehicle parts, as well as vehicles themselves, gear, and much more.`,
          { nameApp }
        )}
      </p>
      <p className={styles.subTitle}>{i18n._(`Key features of the app:`)}</p>
      <ul className={styles.list}>
        <li>
          {i18n._(
            `Trading Parts and Vehicles: You can post ads for selling or buying parts, vehicles, and gear.`
          )}
        </li>
        <li>
          {i18n._(
            `Workshop Finder: Easily find the necessary workshop or service station, read reviews about them, or add your own workshop.`
          )}
        </li>
        <li>
          {i18n._(
            `Events and Activities: Discover exciting events in the auto and moto world, such as festivals, competitions, and meetups. You can also create your own events.`
          )}
        </li>
        <li>{i18n._(`Map: Find nearby workshops, events, and ads.`)}</li>
        <li>
          {i18n._(
            `Shops: If you have a store with auto or moto products, you can add your merchandise and offer it to other users.`
          )}
        </li>
      </ul>
      <p className={styles.subTitle}>
        {i18n._(
          `We are always striving to improve our app and make it even better for you. Therefore, we would appreciate your feedback and suggestions for its enhancement. Together, we can take {nameApp} to the next level!`,
          { nameApp }
        )}
      </p>
      <p className={styles.subTitle}>
        {i18n._(`Thank you for choosing {nameApp}!`, { nameApp })}
      </p>
    </div>
  );
};

export default About;
