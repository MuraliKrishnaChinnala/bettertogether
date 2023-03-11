import { Dialog, Slide } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./EventLineUps.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventLineUps() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-[#f7f5f3] text-[#001936]">
      <Header />
      <div className="mx-[220px] grid grid-cols-1 gap-6 my-10">
        {dummyData?.map((item, i) => {
          return (
            <div
              key={i}
              class="flex w-full h-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700"
            >
              <img
                class="h-full w-[383px] shrink-0 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                src={item.image}
                alt={item?.title}
              />
              <div class="flex flex-col justify-between p-6">
                <div>
                  <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {item?.title}
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {item.description}
                  </p>
                  <p class="text-xs text-neutral-500 dark:text-neutral-300">
                    {item.time}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="h-10 mt-3 bg-[#355ffe] text-white rounded-md w-40 my_button"
                  >
                    I am Interested
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-6 text-2xl font-bold text-center">
              Together We Can:{" "}
              <span className="font-semibold">
                Uniting for a Better Tomorrow Through Social Service
              </span>
            </h1>
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="phone"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    City
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    State
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                </div>
              </div>
            </form>
            <button
              type="button"
              className="bg-[#355ffe] h-10 rounded-md w-40 font-semibold mt-4 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </Dialog>
      <Footer />
    </div>
  );
}

const dummyData = [
  {
    image:
      "https://imgmedia.lbb.in/media/2021/03/603e2853c11b8c60b2210a83_1614686291389.jpg",
    title: "Paws to Volunteer: Help Animals in Shelters",
    description:
      "This campaign focuses on encouraging volunteers to donate their time and effort to animal shelters and rescue organizations. Volunteers can help by walking dogs, socializing with cats, assisting with animal care, and promoting adoption events. By volunteering for this campaign, you can make a positive difference in the lives of animals and help them find their forever homes.",
    time: "Last 5 min ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598403531581-5c4940efd249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsJTIwY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Wildlife Watchers: Monitor and Protect Endangered Species",
    description:
      "This campaign aims to recruit volunteers to help monitor and protect endangered species in their natural habitats. Volunteers can assist with wildlife surveys, habitat restoration, and education and outreach programs. By volunteering for this campaign, you can help to safeguard threatened species and their ecosystems for future generations.",
    time: "Last 30 Min Ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532598735201-8932203d3004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbCUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Pet Therapy: Bring Joy to Those in Need",
    description:
      "This campaign focuses on bringing therapy animals to hospitals, nursing homes, and other institutions to bring joy and comfort to those in need. Volunteers can help by training their own pets to become therapy animals, or by assisting with animal-assisted therapy programs. By volunteering for this campaign, you can make a positive impact on the lives of people and animals alike.",
    time: "2 days ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    title: "Pets are Family: End Animal Abuse and Neglect",
    description:
      "This campaign focuses on raising awareness about animal abuse and neglect and promoting responsible pet ownership. Donations can help to support animal welfare organizations that provide shelter, medical care, and rehabilitation for animals that have been abused or neglected. By supporting this campaign, you can help to create a safer and more compassionate world for all animals.",
    time: "1 Day Ago",
  },
];
