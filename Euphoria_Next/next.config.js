/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['res.cloudinary.com']
    },
    experimental:{
        esmExternals: "loose", 
        serverComponentsExternalPackages: ["mongoose"]
    }
}

module.exports = nextConfig
