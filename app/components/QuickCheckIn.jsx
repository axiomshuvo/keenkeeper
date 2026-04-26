"use client";

import Image from "next/image";
import callIcon from "../../assets/call-icon.png";
import textIcon from "../../assets/text-icon.png";
import videoIcon from "../../assets/video-icon.png";

export default function QuickCheckIn() {
  return (
    <div className=" bg-base-100 rounded-xl shadow-xl p-6 ">
      <h2 className="font-semibold text-xl mb-5 text-left ">Quick Check-In</h2>
      <div className="grid grid-cols1 md:grid-cols-3 gap-4">
        <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 py-5 text-xl">
          <Image src={callIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>Call</span>
        </div>
        <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 pace-y-2 py-5 text-xl ">
          <Image src={textIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>Text</span>
        </div>
        <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 pace-y-2 py-5 text-xl  ">
          <Image src={videoIcon} alt="Snooze 2 Weeks" width={20} height={20} />
          <span>video</span>
        </div>
      </div>
    </div>
  );
}
