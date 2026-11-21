import React, { FunctionComponent, useMemo, useState } from "react";
import { Button, Checkbox, Space, Typography, Flex } from "antd";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

// types
import { Language } from "@/localization/localization.types";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// components
import ModalWindow from "../ModalWindow/ModalWindow";

// constants
import { languages } from "@/localization/localization.const";

// styles
import styles from "./LanguageSelect.styles";

const LanguageSelect: FunctionComponent = () => {
  const { i18n, language, setLanguage } = useLocalesProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titleLanguage = useMemo(
    () =>
      languages
        .find((languageItem) => languageItem.key === language)
        ?.title.slice(0, 2) || languages[0].title.slice(0, 2),
    [language]
  );
  const unicodeFlagIcon = useMemo(
    () =>
      languages.find((languageItem) => languageItem.key === language)?.flag ||
      languages[0].flag,
    [language]
  );

  const onSelectLanguage = async (newLanguage: Language) => {
    await setLanguage(newLanguage);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={styles.container}
      >
        <Space>
          {getUnicodeFlagIcon(unicodeFlagIcon)}
          <Typography.Text>{titleLanguage}</Typography.Text>
        </Space>
      </Button>
      <ModalWindow
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Flex style={styles.containerModal} vertical>
          <Flex style={styles.containerTitleModal}>
            <Typography.Title level={5}>
              {i18n._("Select language")}
            </Typography.Title>
          </Flex>
          <Flex vertical>
            {languages.map((languageItem) => (
              <Button
                key={languageItem.key}
                onClick={() => {
                  onSelectLanguage(languageItem.key);
                }}
                style={styles.buttonModal}
              >
                <Flex style={styles.titlesButtonModal}>
                  {getUnicodeFlagIcon(languageItem.flag)}
                  <Typography.Text>{languageItem.title}</Typography.Text>
                </Flex>
                <Checkbox checked={language === languageItem.key} />
              </Button>
            ))}
          </Flex>
        </Flex>
      </ModalWindow>
    </>
  );
};

export default LanguageSelect;
