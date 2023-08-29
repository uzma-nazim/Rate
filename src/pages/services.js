import Header from '@/Component/Header/Header'
import ServicesCard from '@/Component/ServicesCard/ServicesCard';
import { content } from '@/content';
import React from 'react'

const services = () => {
    const { services } = content;

    return (
        <>
            <Header />
            <div className='container'>
                <div className="all-services-box  top-space">
                    {services.map((item) => {
                        console.log("item", item);
                        return (
                            <ServicesCard
                                title={item.tittle}
                                desc={item.content}
                                icon={item.icon}
                                img={item.img}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default services