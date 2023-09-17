/** @type {import('next').NextConfig} */

module.exports = {
  output: "export",
  images: { loader: "akamai", path: "" },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }
    return config;
  },
  env: {
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY:
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    NEXT_PUBLIC_SPREADSHEET_ID: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
    NEXT_PUBLIC_SHEET_ID: process.env.NEXT_PUBLIC_SHEET_ID,
    NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL:
      process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL
  }
};
