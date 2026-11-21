import React, { FunctionComponent, useState } from "react";
import {
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import { signIn } from "next-auth/react";
import { Button, Typography, Flex } from "antd";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// components
import ModalWindow from "../ModalWindow/ModalWindow";

// constants
import { PATHS } from "@/providers/paths.constants";

// styles
import styles from "./ProfileHeader.styles";

const ProfileHeader: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  const [isShowModal, setIsShowModal] = useState(false);

  const onPressAuthApple = async () => {
    await signIn("apple", { callbackUrl: "/" });
    setIsShowModal(false);
  };

  const onPressAuthGoogle = async () => {
    await signIn("google", { callbackUrl: "/" });
    setIsShowModal(false);
  };

  return (
    <>
      <ModalWindow
        open={isShowModal}
        onClose={() => {
          setIsShowModal(false);
        }}
      >
        <Flex style={styles.containerTitleModal}>
          <Typography.Title level={5}>
            {i18n._("You can sign in using:")}
          </Typography.Title>
        </Flex>
        <Flex style={styles.buttonsModal} vertical>
          <GoogleLoginButton onClick={onPressAuthGoogle} />
          <AppleLoginButton onClick={onPressAuthApple} />
        </Flex>
        <Button
          onClick={() => {
            setIsShowModal(false);
          }}
        >
          {i18n._("Close")}
        </Button>
      </ModalWindow>
    </>
  );
};

export default ProfileHeader;
