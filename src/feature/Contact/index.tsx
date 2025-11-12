
import React from 'react';
import ContactForm from './ContactForm';
import { ConfigProvider } from 'antd';

const ContactPage = () => {
    return (
        <div className='pb-12'>
            <section
                className={`min-h-[calc(100vh-48px)] 2xl:min-h-[calc(100vh-48px)] bg-[#EFEDF0] flex flex-col justify-center items-center text-center rounded-b-[90px]  z-10`} >
                <div className="container flex items-center justify-between bg-transparent  mt-10">
                    <div className=' w-full '>
                        <div className=' w-[80%]  flex flex-col items-start'>
                            <p className=' text-primary text-[32px] font-semibold pb-2'> CONTACT US </p>
                            <p className='text-[48px] text-[#262626] font-semibold pb-6  text-start '> Let’s start the <br /> dialogue now! </p>
                            <p className='text-[#606060] text-start  '>Are you ready to elevate your brand’s digital presence? I lead an exceptional team of UX/UI designers, researchers, 3D artists, and webmasters.
                            </p>
                            <div className="h-[290px]  pt-8">
                                <div className="relative   rounded-2xl shadow-lg h-[290px]">
                                    <div className="relative rounded-2xl overflow-hidden  aspect-video h-[290px]  w-full ">
                                        {/* Video background */}
                                        <div className="absolute inset-0">
                                            <video
                                                // ref={videoRef}
                                                className="w-full h-[290px] object-cover"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                disablePictureInPicture
                                            >
                                                <source
                                                    src="https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4"
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' w-full pt-8 '>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#9aca3c',
                                },
                            }}
                        >
                        <ContactForm />
                        </ConfigProvider>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;