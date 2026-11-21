"use client";

import React from "react";
import Head from "next/head";
import { Button, Typography, Space, Flex } from "antd";
import {
  AppleOutlined,
  AndroidOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useLocalesProvider } from "../../localization/localization.provider";

export default function Main() {
  const { i18n, language, setLanguage } = useLocalesProvider();

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "uk" : "en";
    if (setLanguage) {
      setLanguage(newLang);
    }
  };

  const handleAppStoreClick = () => {
    window.open(
      "https://apps.apple.com/us/app/moto-auto-road-assistant/id6502443474",
      "_blank"
    );
  };

  const handleGooglePlayClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.motoauto.mara&hl=uk",
      "_blank"
    );
  };

  return (
    <>
      <Head>
        <title>Moto Auto Road Assistant – Roadside Help When You Need It</title>
        <meta
          name="description"
          content="Moto Auto Road Assistant connects drivers with fast help on the road – whether it's towing, repair, or support."
        />
        <meta
          property="og:title"
          content="Moto Auto Road Assistant – Roadside Help When You Need It"
        />
        <meta
          property="og:description"
          content="Moto Auto Road Assistant connects drivers with fast help on the road – whether it's towing, repair, or support."
        />
        <meta property="og:image" content="/adaptive-logo.png" />
        <meta property="og:url" content="https://motoauto.mara.com" />
        <meta property="og:type" content="website" />
      </Head>

      <Flex
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #2563eb 30%, #fbbf24 70%, #f59e0b 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Flex
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          }}
        />

        <Flex
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            width: "100%",
          }}
        >
          <Flex
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 10,
            }}
          >
            <Button
              type="text"
              icon={<GlobalOutlined />}
              onClick={handleLanguageChange}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#1e3a8a",
              }}
            />
          </Flex>

          <Flex
            align="center"
            justify="space-between"
            style={{ width: "100%", gap: "60px" }}
          >
            <Flex
              vertical
              align="flex-start"
              justify="center"
              style={{ flex: 1, textAlign: "left" }}
            >
              <Typography.Title
                level={1}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  marginBottom: "1rem",
                  background: "linear-gradient(45deg, #ffffff, #fbbf24)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                {i18n._(`Moto Auto Road Assistant`)}
              </Typography.Title>

              <Typography.Title
                level={2}
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 500,
                  color: "#fbbf24",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.3,
                }}
              >
                {i18n._(`Roadside Help When You Need It`)}
              </Typography.Title>

              <Typography.Text
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  color: "#ffffff",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                }}
              >
                {i18n._(
                  `Connect with fast help on the road – whether it's towing, repair, or support. Your reliable companion for automotive emergencies.`
                )}
              </Typography.Text>

              <Space size="middle" wrap style={{ marginBottom: "2rem" }}>
                <Button
                  type="primary"
                  icon={<AppleOutlined />}
                  onClick={handleAppStoreClick}
                  style={{
                    backgroundColor: "#000000",
                    borderColor: "#000000",
                    fontSize: "1rem",
                    fontWeight: 600,
                    height: "auto",
                    padding: "12px 20px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{i18n._(`Download on the App Store`)}</span>
                </Button>

                <Button
                  type="primary"
                  icon={<AndroidOutlined />}
                  onClick={handleGooglePlayClick}
                  style={{
                    backgroundColor: "#01875f",
                    borderColor: "#01875f",
                    fontSize: "1rem",
                    fontWeight: 600,
                    height: "auto",
                    padding: "12px 20px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{i18n._(`GET IT ON Google Play`)}</span>
                </Button>
              </Space>
            </Flex>

            {/* Right side - Phone mockup */}
            <Flex align="center" justify="center" style={{ flex: 1 }}>
              <Flex
                style={{
                  width: "280px",
                  height: "560px",
                  backgroundColor: "#1a1a1a",
                  borderRadius: "36px",
                  padding: "12px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  position: "relative",
                }}
              >
                {/* Phone screen */}
                <Flex
                  vertical
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Status bar */}
                  <Flex
                    justify="space-between"
                    align="center"
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#f8f9fa",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Typography.Text
                      style={{ fontSize: "12px", fontWeight: 600 }}
                    >
                      9:41
                    </Typography.Text>
                    <Flex gap="4px">
                      <Typography.Text style={{ fontSize: "12px" }}>
                        📶
                      </Typography.Text>
                      <Typography.Text style={{ fontSize: "12px" }}>
                        📶
                      </Typography.Text>
                      <Typography.Text style={{ fontSize: "12px" }}>
                        🔋
                      </Typography.Text>
                    </Flex>
                  </Flex>

                  {/* Map area */}
                  <Flex
                    style={{
                      flex: 1,
                      backgroundColor: "#e8f4fd",
                      position: "relative",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="%23cbd5e1" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grid)" /%3E%3C/svg%3E")`,
                    }}
                  >
                    {/* Map elements */}
                    <Flex
                      vertical
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        right: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "12px",
                        padding: "16px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Typography.Text
                        strong
                        style={{ fontSize: "14px", marginBottom: "8px" }}
                      >
                        Tow Truck Service
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: "12px",
                          color: "#666",
                          marginBottom: "12px",
                        }}
                      >
                        ETA: 15 minutes
                      </Typography.Text>
                      <Flex justify="space-between" align="center">
                        <Typography.Text
                          style={{ fontSize: "12px", color: "#2563eb" }}
                        >
                          📍 Current Location
                        </Typography.Text>
                        <Button
                          size="small"
                          type="primary"
                          style={{ fontSize: "11px", height: "24px" }}
                        >
                          Call
                        </Button>
                      </Flex>
                    </Flex>

                    {/* Location pin */}
                    <Flex
                      style={{
                        position: "absolute",
                        bottom: "120px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "32px",
                      }}
                    >
                      📍
                    </Flex>
                  </Flex>
                  <Flex
                    justify="space-around"
                    align="center"
                    style={{
                      padding: "12px",
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e9ecef",
                    }}
                  >
                    <Typography.Text style={{ fontSize: "20px" }}>
                      🗺️
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: "20px" }}>
                      🔧
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: "20px" }}>
                      📞
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: "20px" }}>
                      👤
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
