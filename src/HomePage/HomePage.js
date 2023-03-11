import React from "react";
import Header from "../Header/Header";
import kids from "../Images/kids.png";
import dogs from "../Images/dogs.png";
import cleaning from "../Images/cleaning.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EventCard from "../EventCard/EventCard";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#f7f5f3]">
      <Header />
      <div className="bg-[#f2f3f7] flex gap-[350px] justify-center pt-10 pb-0 relative">
        <div>
          <img
            src={kids}
            alt="kids"
            className="w-[226px] h-[150px] rounded-xl mb-12"
          />
          <img
            src={cleaning}
            alt="cleaning"
            className="w-[170px] h-[225px] rounded-xl ml-32"
          />
        </div>
        <div>
          <img
            src={dogs}
            alt="dogs"
            className="w-[638px] h-[524px] rounded-xl rounded-bl-none rounded-br-none"
          />
        </div>
        <div className="bg-white w-[480px] h-[300px] py-10 px-[50px] text-[#001936] left-[583px] top-16 rounded-2xl absolute">
          <h1 className="text-4xl font-bold">
            Our Choices Shape the World We Live In
          </h1>
          <p className="mb-5 text-xl font-semibold">
            Find and support a cause that aligns with your passions.
          </p>
          <div className="flex items-center h-10 border rounded-md border-[#9ba3c0]">
            <input
              type="search"
              placeholder="Search by city or cause"
              className="w-full h-full pl-3 rounded-md focus:outline-none"
            />
            <button
              type="button"
              className="bg-[#355ffe] h-full w-10 rounded-r-[5px]"
            >
              <SearchRoundedIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#355ffe] flex justify-between px-[220px] py-10 mt-2 text-white">
        <div className="text-center">
          <h1 className="text-4xl">10</h1>
          <p className="text-base font-semibold">YEARS</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">1M+</h1>
          <p className="text-base font-semibold">VISITORS ANNUALLY</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">150K+</h1>
          <p className="text-base font-semibold">VOLUNTEERS RATED</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">$10M+</h1>
          <p className="text-base font-semibold">DONATED VIA OUR PLATFORM</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-6 mx-[220px]">
        <h1 className="text-4xl font-bold">Find Your Cause</h1>
        <button
          type="button"
          className="bg-[#001936] text-white h-10 rounded-xl w-32"
        >
          View all
        </button>
      </div>
      <div className="flex justify-between mx-[220px]">
        {dummyData?.map((item, i) => {
          return <EventCard key={i} details={item} />;
        })}
      </div>
      <div className="my-10 mx-[220px]">
        <h1 className="mb-6 text-4xl font-bold">The Campaign in Frames</h1>
        <section class="overflow-hidden text-neutral-700">
          <div class="container py-2 lg:pt-10">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i2.wp.com/wishesandblessings.net/blog/wp-content/uploads/2022/05/DSC00649-1-scaled.jpg?resize=2048%2C1365&ssl=1"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://www.iwapublishing.com/sites/default/files/Figure1.jpg"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://en-media.thebetterindia.com/uploads/2019/02/Mumbai-woman-free-education-underprivileged-india.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://cloudfront.timesnownews.com/media/Beach_cleanup.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://thepatriot.in/wp-content/uploads/2022/11/2-800x450.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/15/Pictures/_87112c3e-21bb-11e7-89d6-c3c500e93e5a.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

const dummyData = [
  {
    eventImage:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/21/Pictures/virus-outbreak-school-good-thing-india-street_62e1a066-fbfe-11ea-ac1a-6982f7a91a4b.jpg",
    title: "Children & Youth Development",
    description:
      "Volunteering for youth development involves activities like mentoring, coaching, tutoring, and organizing programs to help them develop social, teamwork, problem-solving, and leadership skills.",
    count: 23,
  },
  {
    eventImage:
      "https://www.volunteerhq.org/images/pages/project_type_music_social.png",
    title: "Music & Arts",
    description:
      "A music volunteer donates their time to help with tasks related to music events or organizations. They can gain experience, meet new people, and make a positive impact on their community.",
    count: 30,
  },
  {
    eventImage:
      "https://gumlet.assettype.com/knocksense/import/27584473/origin.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    title: "Animal Welfare & Protection",
    description:
      "Animal protection volunteering helps organizations that work towards animal welfare and involves tasks such as animal care, rescue, fundraising, and awareness.",
    count: 50,
  },
];
