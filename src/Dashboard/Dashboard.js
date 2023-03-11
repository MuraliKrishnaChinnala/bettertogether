import React, { useState } from "react";
import Header from "../Header/Header";
import kids from "../Images/kids.png";
import dogs from "../Images/dogs.png";
import cleaning from "../Images/cleaning.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Footer from "../Footer/Footer";
import EventCategoryCard from "../EventCategoryCard/EventCategoryCard";
import { Dialog, Slide } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#f7f5f3] text-[#001936]">
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
            className="w-[638px] h-[440px] rounded-xl rounded-bl-none rounded-br-none"
          />
        </div>
        <div className="bg-white w-[480px] h-[340px] py-10 px-[50px] text-[#001936] left-[583px] top-16 rounded-2xl absolute">
          <h1 className="mb-5 text-4xl font-bold">
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="w-[600px] p-6">
          <div className="flex justify-end">
            <CloseRoundedIcon
              className="cursor-pointer"
              onClick={() => handleClose()}
            />
          </div>
          <h1 className="mb-6 text-4xl font-bold text-center">
            Upcoming Campaign
          </h1>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="event"
            className="w-full rounded-md h-60"
          />
          <h1 className="mt-6 text-3xl font-bold">Feed a Life</h1>
          <p className="text-base font-semibold">
            This campaign aims to end hunger by providing meals to those in
            need. By donating to this campaign, you can help feed a life and
            make a positive impact on those affected by hunger.
          </p>
          <button
            type="button"
            className="bg-[#355ffe] h-10 rounded-md w-40 font-semibold mt-3 text-white"
          >
            I am Interested
          </button>
        </div>
      </Dialog>
      <div className="flex justify-between mx-[220px] items-center my-10">
        <h1 className="text-4xl font-bold">Cause Catalogue</h1>
        <button
          type="button"
          className="bg-[#001936] text-white h-10 rounded-xl w-32"
        >
          View all
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 mx-[220px] p-10">
        {dummyData?.map((item, i) => {
          return <EventCategoryCard key={i} details={item} />;
        })}
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
      <Footer />
    </div>
  );
}

const dummyData = [
  {
    imageUrl:
      "https://www.onsitegas.com/wp-content/uploads/2017/12/Environmental-845x321.jpg",
    header: "Environment Conservation & Restoration",
  },
  {
    imageUrl:
      "https://ayshaakhtar.com/wp-content/uploads/2015/01/o-BOY-SAVING-DOG-facebook.jpg",
    header: "Animal Welfare & Rescue",
  },
  {
    imageUrl:
      "https://static.sadhguru.org/d/46272/1667888058-volunteer-glimpses-1.jpg",
    header: "Arts & Culture",
  },
  {
    imageUrl: "https://etimg.etb2bimg.com/photo/71907872.cms",
    header: "HealthCare",
  },
  {
    imageUrl:
      "https://c8.alamy.com/comp/CXE5JH/indian-school-children-having-lunch-andhra-pradesh-south-india-CXE5JH.jpg",
    header: "Hunger Relief & Food Bank Volunteering",
  },
  {
    imageUrl:
      "https://indianwomenblog.org/wp-content/uploads/2015/05/Underpriviledged-Children.png",
    header: "Literacy & Education Support",
  },
  {
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5cab57824bbe6f2746755c4b/0x0.jpg?format=jpg&width=1200",
    header: "Sports Coaching & Mentoring",
  },
  {
    imageUrl:
      "https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-08/Leave-no-one-behind.png?itok=RjMOA-_M",
    header: "Human Rights & Social Justice",
  },
  {
    imageUrl:
      "https://en-media.thebetterindia.com/uploads/2020/10/Feature-Image-4550.jpg",
    header: "Mentoring & Tutoring Youth",
  },
  {
    imageUrl:
      "https://www.volunteerhq.org/images/pages/project_type_womens_education_social.png",
    header: "Women Empowerment",
  },
  {
    imageUrl:
      "https://www.mei.edu/sites/default/files/styles/featured_image_article/public/Chennai%2520Flood.jpg?itok=VGM-P1XZ",
    header: "Disaster Relief",
  },
];
