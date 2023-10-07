import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import meetup from '../assets/images/business/latest_news_page_1.jpg'
import flower from '../assets/images/business/img4.jpg'
import contact from '../assets/images/business/ContactSeller.jpg'
import ReCAPTCHA from 'react-google-recaptcha';
import Summery from '../components/summery/Summery';
const FranchisorsDirectory = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    function ThumbnailPlugin(mainRef) {
        return (slider) => {
            function removeActive() {
                slider.slides.forEach((slide) => {
                    slide.classList.remove("active")
                })
            }
            function addActive(idx) {
                slider.slides[idx].classList.add("active")
            }

            function addClickEvents() {
                slider.slides.forEach((slide, idx) => {
                    slide.addEventListener("click", () => {
                        if (mainRef.current) mainRef.current.moveToIdx(idx)
                    })
                })
            }

            slider.on("created", () => {
                if (!mainRef.current) return
                addActive(slider.track.details.rel)
                addClickEvents()
                mainRef.current.on("animationStarted", (main) => {
                    removeActive()
                    const next = main.animator.targetIdx || 0
                    addActive(main.track.absToRel(next))
                    slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
                })
            })
        }
    }
    const [sliderRef, instanceRef] = useKeenSlider({

    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,

            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    return (
        <>
            <PageHeader title='Business Profile' subHeading='Home' ></PageHeader>
            {/* top section */}
            <section className='container mx-auto py-5 px-10 lg:px-0'>
                <div className='flex justify-between'>
                    <button className='bg-[#774e88] text-white px-6 py-2'>Back</button>
                    <div className='flex '>
                        <button className='bg-[#774e88] text-white px-6 py-2'><i className="fa-regular fa-star"></i>Save This Business</button>
                        <div className='ms-5 bg-[#774e88] text-white px-6 py-2'>
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-10 lg:px-0'>
                <div className='lg:flex justify-between'>
                    {/* slider */}
                    <div className='w-9/12'>
                        <h1 className='bg-[#774e88] text-white py-2 px-5'>Title Of The Ad</h1>

                        <div ref={sliderRef} className="keen-slider mb-2">
                            <div className="keen-slider__slide number-slide1">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide2">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide3">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide4">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide5">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide6">
                                <img className='w-full' src={meetup} alt="" />
                            </div>
                        </div>



                        <div ref={thumbnailRef} className="keen-slider thumbnail">
                            <div className="keen-slider__slide number-slide1">
                                <img src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide2">
                                <img src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide3">
                                <img src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide4">
                                <img src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide5">
                                <img src={meetup} alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide6">
                                <img src={meetup} alt="" />
                            </div>
                        </div>
                        {/* description section */}
                        <section>
                            <article>
                                <h1 className='text-[#774e88] text-xl mt-2 mb-4'>Business Discription</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                                <hr
                                    className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </article>
                            <article>
                                <h1 className='text-[#774e88] text-xl mt-2 mb-4'>Best Attributes</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                                <hr
                                    className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </article>
                            <article>
                                <h1 className='text-[#774e88] text-xl mt-2 mb-4'>Features Potentials</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                                <hr
                                    className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </article>
                            <article>
                                <h1 className='text-[#774e88] text-xl mt-2 mb-4'>Website Links</h1>
                                <p>Website:</p>
                                <hr
                                    className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </article>
                            <article>
                                <h1 className='text-[#774e88] text-xl mt-2 mb-4 font-bold'>Video Links</h1>
                                <div className='flex'>
                                    <img className='w-1/4 me-5' src={flower} alt="" />
                                    <img className='w-1/4 me-5' src={flower} alt="" />
                                    <img className='w-1/4 ' src={flower} alt="" />
                                </div>
                                <hr
                                    className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </article>
                        </section>
                    </div>
                    {/*right side bar */}
                    <div className=' w-80    mb-6 '>
                        <div className='bg-[#774e88]  py-6'>
                            <div className='border-b '>
                            <h1 className='text-xl mb-4  px-4 text-white'>Summary Info</h1>
                            </div>

                            <div className='px-4'>
                               <Summery></Summery>

                            </div>




                        </div>
                        <div className='mt-4 '>
                            {/* <img className='' src={sidebarImage} alt="" /> */}
                        </div>
                    </div>

                </div>

            </section>
            <section className='container mx-auto my-10 px-10 lg:px-0'>
                <div className='lg:flex  justify-between'>
                    <div className='lg:w-1/4'>
                        <h1 className='text-xl py-3'>Contact Seller</h1>
                        <img className='w-96 lg:w-full' src={contact} alt="" />
                    </div>
                    <div className=''>
                        <div
                            className="block max-w-md rounded-lg bg-white p-6  dark:bg-neutral-700">
                            <form>
                                <div className="grid grid-cols-2 gap-4">

                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            className="peer block min-h-[auto] w-full rounded border border-[#ececec] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleInput123"
                                            aria-describedby="emailHelp123"
                                            placeholder="First name" />
                                        <label
                                            for="emailHelp123"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Your Name
                                        </label>
                                    </div>


                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="email"
                                            className="peer block min-h-[auto] w-full rounded border border-[#ececec] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleInput124"
                                            aria-describedby="emailHelp124"
                                            placeholder="Last name" />
                                        <label
                                            for="exampleInput124"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Email Address
                                        </label>
                                    </div>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border border-[#ececec] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput125"
                                        placeholder="Phone Number" />
                                    <label
                                        for="exampleInput125"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Phone Number
                                    </label>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border border-[#ececec] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput126"
                                        placeholder="Subject" />
                                    <label
                                        for="exampleInput126"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Subject
                                    </label>
                                </div>


                                <div class="relative mb-3" data-te-input-wrapper-init>
                                    <textarea
                                        class="peer block min-h-[auto] w-full rounded border border-[#ececec] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Your message"></textarea>
                                    <label
                                        for="exampleFormControlTextarea1"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Your Message</label
                                    >
                                </div>

                                <ReCAPTCHA
                                    sitekey="6LcrZmIoAAAAAE2swJx3RuslrBvhZ48SB2x57hA4"
                                    onChange={onChange}
                                />
                                <div className='flex justify-center'>
                                    <button className='bg-[#4f287b] px-3 py-2 text-white mt-4'>Send a message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=' bg-[#4f287b] rounded-md h-48 w-96'>
                        <div className='lg:px-3 lg:py-4'>
                            <h1 className='text-center text-white'>Contact Seller</h1>
                            <hr className="my-3 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
                            <div className='flex justify-between px-3 lg:px-0  text-white'>
                                <h1 className=''>Contact :</h1>
                                <p>Lions Business Brokers</p>
                            </div>
                            <div className='flex justify-between px-3 lg:px-0 '>
                                <h1 className='text-white'><i className="fa-solid fa-mobile-screen me-1"></i>Phone:</h1>
                                <p className='text-white ms-16'>1300309094</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FranchisorsDirectory;