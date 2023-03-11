import PropTypes from "prop-types";
import React from "react";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import "./EventCategoryCard.css";
import { useNavigate } from "react-router";

export default function EventCategoryCard({ details }) {
  const Navigate = useNavigate();

  return (
    <div
      onClick={() => Navigate("/eventlineups")}
      className="rounded-[20px] card_container group cursor-pointer h-[400px] overflow-hidden flex justify-center items-center relative flex-[1_1_auto]"
    >
      <div
        className="w-full h-full my-div"
        style={{ backgroundImage: `url(${details.imageUrl})` }}
      />
      <div className="absolute text-center text-white">
        <h1 className="text-2xl font-bold text-center">{details?.header}</h1>
        <button type="button" className="text-base font-semibold">
          More Info{" "}
          <TrendingFlatRoundedIcon className="transition-transform transform translate-x-0 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
}

EventCategoryCard.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.object,
  }),
};
