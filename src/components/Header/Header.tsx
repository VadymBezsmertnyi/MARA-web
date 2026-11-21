import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Flex } from "antd";
import { useRouter } from "next/router";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// components
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

// constants
import { PATHS } from "@/providers/paths.constants";

// styles
import styles from "./Header.module.css";

type HeaderProps = {
  isShowMenu?: boolean;
};

export const Header: FunctionComponent<HeaderProps> = ({
  isShowMenu = true,
}) => {
  const router = useRouter();
  const { i18n } = useLocalesProvider();

  return (
    <Flex className={styles.container}>
      <Flex
        className={styles.containerLogo}
        onClick={() => {
          router.push(PATHS.main);
        }}
      >
        <Image
          src={"/adaptive-logo.png"}
          alt={i18n._("Logo")}
          width={50}
          height={50}
        />
        <Typography.Title level={5} className={styles.titleLogo}>
          Moto Auto Road Assistant
        </Typography.Title>
      </Flex>
      {isShowMenu ? (
        <Flex className={styles.listMenu}>
          <Link href={PATHS.main} className={styles.menuElement}>
            {i18n._("Home")}
          </Link>
          <Link href={PATHS.termOfUse} className={styles.menuElement}>
            {i18n._("Term of use")}
          </Link>
          <Link href={PATHS.privacyPolicy} className={styles.menuElement}>
            {i18n._("Privacy policy")}
          </Link>
        </Flex>
      ) : (
        <Flex />
      )}
      <Flex className={styles.containerLeft}>
        <ProfileHeader />
        <LanguageSelect />
      </Flex>
    </Flex>
  );
};
