import React, { FunctionComponent } from "react";
import { Typography, Flex } from "antd";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./HeaderInfoProfile.styles";

type HeaderInfoProfileProps = {
  title: string;
  total: number;
  used: number;
  remaining: number;
};

const HeaderInfoProfile: FunctionComponent<HeaderInfoProfileProps> = ({
  title,
  total,
  used,
  remaining,
}) => {
  const { i18n } = useLocalesProvider();

  return (
    <Flex style={styles.container} vertical>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Flex style={styles.containerInfo}>
        <Typography.Text>
          {i18n._("Total")}: {total}
        </Typography.Text>
        <Typography.Text>
          {i18n._("Used")}: {used}
        </Typography.Text>
        <Typography.Text>
          {i18n._("Remaining")}: {remaining}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default HeaderInfoProfile;
