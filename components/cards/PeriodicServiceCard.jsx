import React from "react";

const PeriodicServiceCard = (props) => {
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let today = new Date(props.item.has_come).toLocaleDateString(
    "fa-IR",
    options,
  );

  return (
    <li className="shadow-[0_0_6px_0_rgba(177,177,177,1)] text-14 p-2 rounded-5">
      <div className="flex justify-between font-light">
        <span>{props.item.title}</span>
        <span>
          {props.item.price.toLocaleString()}{" "}
          <span className="font-bold">تومان</span>
        </span>
      </div>
      <div className="mt-2 text-12">
        ({today} سه شنبه - ۱۰:۰۰ - ۱۲:۰۰ در نمایندگی کارچک)
      </div>
    </li>
  );
};

export default PeriodicServiceCard;
