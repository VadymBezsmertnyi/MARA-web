import React, { FunctionComponent } from "react";
import Link from "next/link";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./TermsOfUse.module.css";

const TermsOfUse: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  const nameApp = "M.A.R.A.(Moto Auto Road Assistant)";

  const line = (subTitle: string, text: string) => (
    <>
      {subTitle.length ? <h4 className={styles.subTitle}>{subTitle}</h4> : null}
      {text.length ? <p className={styles.text}>{text}</p> : null}
    </>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Terms of Use")}</h1>
      <div>
        <p className={styles.text}>
          <strong>{i18n._("Last updated:")}</strong>{" "}
          {i18n._("February {date}, {year}", { date: "3", year: "2026" })}
        </p>
        <p className={styles.text}>
          {i18n._(
            `"{nameApp}" mobile application developed by Vadym Bezsmertnyi, FOP. ("us", "we", or "our"). By accessing or using our mobile application ("Service"), you (User) agree to comply with and be bound by these Terms of Use. Please read these terms carefully before using our app.`,
            { nameApp }
          )}
        </p>
      </div>
      <div>
        {line(
          i18n._("1. End-User License Agreement (EULA)"),
          i18n._(
            `This End-User License Agreement ("Agreement") is a legal contract between you ("User") and Vadym Bezsmertnyi FOP ("Company") regarding the use of {nameApp} ("App"). By downloading, installing and using the App, the User agrees to be bound by the terms and conditions of this Agreement and acknowledge that the User has read, understood, and agreed to these Terms of Use. If the User doesn't not agree with any part of these terms, please do not use our app.`,
            { nameApp }
          )
        )}
        {line(
          i18n._("1.1 License Grant"),
          i18n._(
            "Vadym Bezsmertnyi, FOP grants the User a non-exclusive, non-transferable, revocable license to use the App solely for personal, non-commercial purposes. This license does not grant the User any rights to the intellectual property, including copyrights, trademarks, or patents, associated with the App."
          )
        )}
      </div>
      <div>
        {line(i18n._(`2. Use of the Service`), "")}
        {line(
          i18n._(`2.1 Usage Requirements`),
          i18n._(
            `The User must be at least 18 years old to use our app. By using the Service, the User represents and warrants that the User is at least 18 years old.`
          )
        )}
        {line(
          i18n._(`2.2 User Conduct`),
          i18n._(
            `The User agrees not to use the Service for any unlawful or unauthorized purpose. The User also agrees not to interfere with the proper working of the app or disrupt it in any way.`
          )
        )}
        {line(
          i18n._(`2.3 User Responsibilities`),
          i18n._(
            `- The User agrees to comply with all applicable laws and regulations when using the App.`
          )
        )}
        {line(
          "",
          i18n._(
            `- The User may not, under any circumstances, reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.`
          )
        )}
        {line(
          "",
          i18n._(
            `- The User may not use the App in any way that may cause harm to Vadym Bezsmertnyi, FOP or other users, including but not limited to transmitting malware or engaging in fraudulent activities.`
          )
        )}
      </div>
      <div>
        {line(i18n._(`3. User-Generated Content and AI Verification`), "")}
        {line(
          i18n._(`3.1 Photo Collection`),
          i18n._(
            `We may collect photos taken using our application's camera to enhance our application. Your contributions are extremely valuable to improve the quality of the application.`
          )
        )}
        {line(
          i18n._(`3.2 AI-Powered Content Verification`),
          i18n._(
            `All user-generated content, including events, workshops, and comments, is automatically verified using artificial intelligence (AI) technology. This AI system analyzes content to ensure it complies with our community standards and content policies. The verification process includes checking for inappropriate content, spam, hate speech, and violations of intellectual property rights.`
          )
        )}
        {line(
          i18n._(`3.3 Automated Moderation`),
          i18n._(
            `Our AI moderation system automatically reviews and may reject content that violates our terms. Content that is flagged by the AI system will not be published and the user will be notified of the rejection. Users have the right to appeal moderation decisions by contacting our support team.`
          )
        )}
        {line(
          i18n._(`3.4 Data Ownership`),
          i18n._(
            `By submitting photos and content, the User grants us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, and distribute the content for the purpose of enhancing our app, including AI training and verification processes.`
          )
        )}
        {line(
          i18n._(`3.5 User-Provided Content`),
          i18n._(
            `We may collect any content provided by the user to enhance our application. Your contribution is extremely valuable to improve the quality of the application and may be used to improve our AI verification systems.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`4. Payment`),
          i18n._(
            `Payment information is securely processed by third-party payment providers, and we do not store sensitive payment details on our servers.`
          )
        )}
        {line(i18n._(`4.1 Refunds`), "")}
        <p className={styles.text}>
          {i18n._(
            `Refund requests are considered on a case-by-case basis. If you believe you are entitled to a refund, please contact us at `
          )}
          <strong className={styles.link}>
            <Link href={"mailto:contact@example.com"}>
              contact@example.com
            </Link>
          </strong>
          {i18n._(
            ` with the details of your request. We will review your request and respond as promptly as possible.`
          )}
        </p>
        {line(
          i18n._(`5. Content Standards and AI Moderation Rules`),
          i18n._(
            `All user-generated content is automatically verified by our AI system. The AI enforces the following content standards (violations result in automatic rejection):`
          )
        )}
        {line(
          "",
          i18n._(
            `1. Prohibited: offensive, hateful, discriminatory, or violent content`
          )
        )}
        {line("", i18n._(`2. Prohibited: adult or pornographic content`))}
        {line(
          "",
          i18n._(`3. Prohibited: copyright or intellectual property violations`)
        )}
        {line("", i18n._(`4. Prohibited: false or misleading information`))}
        {line("", i18n._(`5. Prohibited: spam or excessive advertising`))}
        {line(
          "",
          i18n._(`6. Prohibited: personal information without consent`)
        )}
        {line(
          "",
          i18n._(
            `7. Prohibited: content promoting illegal activities or violating laws`
          )
        )}
        {line("", i18n._(`8. Prohibited: malware or viruses`))}
        {line(
          "",
          i18n._(`9. Prohibited: irrelevant content for events or workshops`)
        )}
        {line(
          "",
          i18n._(`10. Prohibited: nonsensical content or random characters`)
        )}
        {line(
          "",
          i18n._(
            `11. Prohibited: hate speech or calls to violence - for events`
          )
        )}
        {line(
          i18n._(`6. Privacy and AI Processing`),
          i18n._(
            `We collect and process personal information and usage data as described in our Privacy Policy. By using our app, the User consent to our collection and use of this information, including AI-powered content analysis and verification as outlined in the Privacy Policy.`
          )
        )}
        {line(
          i18n._(`7. Limitation of Liability`),
          i18n._(
            `Vadym Bezsmertnyi, FOP shall not be liable for direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, including but not limited to errors in AI content verification or automated moderation decisions.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`8. Changes to Terms of Use`),
          i18n._(
            `We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting. Continued use of the app after any modifications indicate your acceptance of the modified terms.`
          )
        )}
        {line(
          i18n._(`9. Update and Support`),
          i18n._(
            `We may provide updates to the App as it sees fit, which may include bug fixes, enhancements, and new features, including improvements to AI verification systems. Vadym Bezsmertnyi, FOP is not obligated to provide support or maintenance for the App.`
          )
        )}
        {line(
          i18n._(`10. Termination`),
          i18n._(
            `Vadym Bezsmertnyi, FOP reserves the right to terminate or suspend the User's license to use the App at its sole discretion, including for repeated violations of content policies detected by AI systems. Upon termination, the User must cease using the App and remove it from their device.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`11. Disclaimer of Warranties`),
          i18n._(
            `The App is provided "as is" and "as available" without warranties of any kind. Vadym Bezsmertnyi, FOP disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. This includes no guarantees regarding the accuracy or completeness of AI content verification.`
          )
        )}
        {line(
          i18n._(`12. Governing Law`),
          i18n._(
            `This Agreement is governed by and construed in accordance with the laws of the Ukraine, without regard to its conflict of law principles.`
          )
        )}
        {line(i18n._(`13. Contact Us`), "")}
        <p className={styles.text}>
          {i18n._(
            "If you have any questions, concerns, or feedback about these Terms of Use, please contact us at "
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

export default TermsOfUse;
