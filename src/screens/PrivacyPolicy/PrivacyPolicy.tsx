import React, { FunctionComponent } from "react";
import Link from "next/link";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  const nameApp = "M.A.R.A.(Moto Auto Road Assistant)";

  const line = (subTitle: string, text: string) => (
    <>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      {text.length ? <p className={styles.text}>{text}</p> : null}
    </>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Privacy Policy")}</h1>
      <div>
        <p className={styles.text}>
          <strong>{i18n._("Last updated:")}</strong>{" "}
          {i18n._("February {date}, {year}", { date: "3", year: "2026" })}
        </p>
        <p className={styles.text}>
          {i18n._(
            `"{nameApp}" mobile and web applications developed by Vadym Bezsmertnyi, FOP ("us", "we", or "our"). This Privacy Policy outlines how we collect, use, and protect your information when you use our mobile application ("Service").`,
            { nameApp }
          )}
        </p>
      </div>
      <div>
        <h2 className={styles.title}>{i18n._("Information We Collect")}</h2>
        {line(
          i18n._("Personal Information"),
          i18n._(
            "To provide you with the best experience, we may collect personally identifiable information, such as your email address, first name, last name, and phone number. This information is used to personalize your experience, communicate important updates, and for AI-powered content verification purposes."
          )
        )}
        {line(
          i18n._("Usage Data"),
          i18n._(
            "We automatically collect usage data when you interact with our Service. This data may include your IP address, device type, location, operating system, app version, and usage patterns. This information helps us improve the app's performance, enhance user experience, and train our AI verification systems."
          )
        )}
        {line(
          i18n._("Content and AI Processing Data"),
          i18n._(
            "When you submit content (events, workshops, comments, photos), this data is processed by our AI verification system to ensure compliance with community standards. The AI analysis includes content classification, sentiment analysis, and policy compliance checking. This processing is automated and helps maintain a safe environment for all users."
          )
        )}
        {line(
          i18n._("Your Location"),
          i18n._(
            "When you use the M.A.R.A. app and explicitly grant permission, we may collect and process your location data to provide you with assistance services. Your location information is solely used to facilitate efficient assistance in case of emergencies or when requested by you. We do not share this information with any third parties without your explicit consent, and it is securely stored within our system. At any time, you have the option to revoke this permission and disable location tracking through the app settings. We prioritize the security and confidentiality of your personal information and adhere to stringent privacy standards to safeguard your data."
          )
        )}
        {line(
          i18n._("AI Model Training and Improvement"),
          i18n._(
            "We use anonymized and aggregated user content to train and improve our AI verification systems. This data is processed in accordance with applicable privacy laws and is used solely to enhance the accuracy and effectiveness of our content moderation capabilities. No personal identifiable information is used in AI training processes."
          )
        )}
      </div>
      <div>
        <h2 className={styles.title}>
          {i18n._("How We Use Your Information")}
        </h2>
        {line(
          i18n._("AI-Powered Content Moderation"),
          i18n._(
            "App M.A.R.A.(Moto Auto Road Assistance) uses artificial intelligence to automatically verify and moderate user-generated content including events, workshops, and comments. When you submit content, it is analyzed by our AI system to ensure compliance with community standards. This AI processing helps maintain a safe and appropriate environment for all users. The AI system checks for inappropriate content, spam, hate speech, and other policy violations. Content that violates our policies will be automatically rejected, and users will be notified of the decision."
          )
        )}
        {line(
          i18n._("Location Data for SOS Function"),
          i18n._(
            'App M.A.R.A.(Moto Auto Road Assistance) collects location data to enable for the "SOS" function so that other app users can assist you even when the app is closed or not in use. When you use the M.A.R.A. app and explicitly grant permission, we may collect and process your location data to provide you with assistance services. Your location information is solely used to facilitate efficient assistance in case of emergencies or when requested by you. We do not share this information with any third parties without your explicit consent, and it is securely stored within our system. At any time, you have the option to revoke this permission and disable location tracking through the app settings. We prioritize the security and confidentiality of your personal information and adhere to stringent privacy standards to safeguard your data.'
          )
        )}
        {line(
          i18n._("Analytics and AI System Improvement"),
          i18n._(
            "We track user behavior and engagement to better understand how the app is used and identify areas for improvement. This data is anonymized and aggregated for analytical purposes and to enhance the performance of our AI verification systems."
          )
        )}
        {line(
          i18n._("Data Security and AI Processing"),
          i18n._(
            "We are committed to safeguarding your data and have implemented appropriate measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal information. All AI processing is conducted using secure systems with appropriate privacy safeguards."
          )
        )}
        {line(
          i18n._("Third-Party AI Services"),
          i18n._(
            "We use third-party AI services (OpenAI) to power our content verification and moderation systems. These providers process content on our behalf following strict privacy and security protocols. Your content is shared with these services solely for verification purposes and is handled in accordance with their privacy policies and applicable data protection laws."
          )
        )}
        {line(
          i18n._("Your Rights and Choices"),
          i18n._(
            "You can control your data shared with us by managing app permissions on your device. You can also opt out of receiving promotional emails by following the unsubscribe link included in those emails. If your content is rejected by our AI moderation system, you have the right to appeal the decision by contacting our support team. You may also request access to or deletion of your personal data in accordance with applicable privacy laws."
          )
        )}
        {line(
          i18n._("Changes to this Privacy Policy"),
          i18n._(
            "We may update this Privacy Policy as necessary to reflect changes in our practices or for legal reasons. We recommend reviewing this page periodically for the latest information."
          )
        )}
        {line(i18n._("Contact Us"), "")}
        <p className={styles.text}>
          {i18n._(
            "If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at "
          )}
          <strong className={styles.link}>
            <Link href={"mailto:contact@example.com"}>
              contact@example.com
            </Link>
          </strong>
          .
        </p>
      </div>
    </div>
  );
};
