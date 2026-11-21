import React, { FunctionComponent } from "react";
import { Button } from "antd";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

type ButtonBackProps = {
  title?: string;
  onClick: () => void;
};

const ButtonBack: FunctionComponent<ButtonBackProps> = ({ title, onClick }) => {
  const { i18n } = useLocalesProvider();

  return (
    <Button type="primary" onClick={onClick}>
      {title || i18n._("Back")}
    </Button>
  );
};

export default ButtonBack;
