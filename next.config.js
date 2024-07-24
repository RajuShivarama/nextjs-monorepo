/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",

    STRIPE_WEBHOOK_SECRET: "",

    STRIPE_SECRET_KEY: "",

    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_FROM_EMAIL: "",
    SMTP_FROM_NAME: "BookIT",

    GEOCODER_PROVIDER: "mapquest",
    GEOCODER_API_KEY: "",
    MAPBOX_ACCESS_TOKEN: "",

    NEXTAUTH_SECRET: "",
    REVALIDATE_TOKEN: "",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
