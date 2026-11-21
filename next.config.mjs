/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "antd",
    "@ant-design/icons",
    "@ant-design/icons-svg",

    "@rc-component/util",
    "@rc-component/pagination",
    "rc-pagination",

    "rc-util",
    "rc-motion",
    "rc-trigger",
    "rc-tooltip",
    "rc-dropdown",
    "rc-select",
    "rc-tree",
    "rc-table",
  ],
  experimental: {
    esmExternals: "loose",
    fullySpecified: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: { fullySpecified: false },
    });
    return config;
  },
};

export default nextConfig;
