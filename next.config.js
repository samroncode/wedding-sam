/** @type {import('next').NextConfig} */

const { GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY } = process.env;

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
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  }
};
