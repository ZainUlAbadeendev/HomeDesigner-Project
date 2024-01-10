import React from 'react';

const Cardone = () => {
    const images = [
        {
            src:
                'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Home Decors',
            link: '/home-decors', // Add your desired link here
        },
        {
            src:
                'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Bedrooms',
            link: '/bedrooms', // Add your desired link here
        },
        {
            src:
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Living Room',
            link: '/living-room', // Add your desired link here
        },
        {
            src:
                'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Kitchen',
            link: '/kitchen', // Add your desired link here
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 mt-8">
            {images.map((image, index) => (
                <a key={index} href={image.link} className="group">
                    <div className="aspect-w-1 aspect-h-1 relative overflow-hidden group">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h2 className="text-white text-lg font-bold">
                                {image.alt}
                            </h2>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Cardone;
