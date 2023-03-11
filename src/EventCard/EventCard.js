import PropTypes from "prop-types";
import React from "react";
import "./EventCard.css"

export default function EventCard({ details }) {
  return (
    <div className="bg-white rounded-[20px] w-[393px] min-h-[400px] transition duration-150 event_container cursor-pointer">
      <img
        src={details?.eventImage}
        alt="event"
        className="h-[200px] w-full rounded-t-[20px] object-cover"
      />
      <div className="flex flex-col gap-2 p-3">
        <h1 className="text-2xl font-semibold">{details?.title}</h1>
        <p className="text-base">{details?.description}</p>
        <p className="bg-[#f2f3f7] text-base text-[#49516f] rounded-md p-2 w-32">{details?.count} Campaigns</p>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  details: PropTypes.object,
};
