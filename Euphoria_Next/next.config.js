/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['res.cloudinary.com']
    },
    experimental:{
        esmExternals: "loose", 
        serverComponentsExternalPackages: ["mongoose"]
    },
    plugins: {
        autoprefixer: {},
    },
}

module.exports = nextConfig
