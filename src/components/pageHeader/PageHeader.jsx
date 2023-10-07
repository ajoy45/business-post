import React from 'react';

const PageHeader = ({title,subHeading}) => {
    return (
         <section className='bg-[#774e88] py-24 border-b-4 border-[#291958] relative'>
         <div className="">
             <div className="container mx-auto">
                 <div className="flex justify-between items-center">
                     <div className="">
                         <h2 className='text-white text-3xl'>{title}</h2>
                     </div>
                     <div className="mt-24 py-4 px-4 bg-[#291958] absolute bottom-0 right-64">
                         <ul className="flex text-white">
                             <li><a href="#">{subHeading} <i className="fas fa-chevron-right"></i></a></li>
                             <li><a href="#">{title}</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    );
};

export default PageHeader;