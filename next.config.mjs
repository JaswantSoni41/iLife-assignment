/** @type {import('next').NextConfig} */
const nextConfig = {

    basePath: '/iLife-assignment',

    images:{
        remotePatterns:[
            {
                protocol:"http",
                hostname:"**"
            },
            {
                protocol:"https",
                hostname:"**"
            }
        ]

    
}

};

export default nextConfig;
