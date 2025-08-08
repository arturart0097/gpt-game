import Will from "@/assets/images/will.png";
import David from "@/assets/images/david.png";
import Viktor from "@/assets/images/viktor.png";

import "./style.css";

export const MeetTeam = () => {
  return (
    <div className="meetTeam_wrapper">
      <h2>Meet the Team </h2>
      <div className="teams">
        <div className="person">
          <img src={Will} alt="Will" />
          <p>Will Deane</p>
          <p>Founder and CEO</p>
        </div>
        <div className="person">
          <img src={David} alt="Will" />
          <p>Devin Lovato</p>
          <p>CMO</p>
        </div>
        <div className="person">
          <img src={Viktor} alt="Will" />
          <p>Victor Tan</p>
          <p>COO</p>
        </div>
      </div>
    </div>
  );
};
