import Image from "next/image";
import bellIcon from "../../../assets/bell-icon.png";
import callIcon from "../../../assets/call-icon.png";
import textIcon from "../../../assets/text-icon.png";
import videoIcon from "../../../assets/video-icon.png";

export default async function FriendDetailsPage({ params }) {
  const { slug } = await params;
  console.log("Friend slug:", slug);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const friends = await res.json();
  const friend = friends.find((f) => f.id === parseInt(slug));
  console.log("Friend details:", friend);

  if (!friend) {
    return <div>Friend not found</div>;
  }

  const formattedNextDueDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(friend.next_due_date));

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-20">
        <div className="col-span-1">
          <div className=" card  gap-2">
            <div className="card-body flex flex-col items-center rounded-xl gap-2 bg-base-100 shadow-xl mb-5">
              <Image
                className="rounded-full w-24 h-24 object-cover mb-4"
                src={friend.picture}
                alt={friend.name}
                width={100}
                height={100}
              />
              <h2 className="text-3xl font-bold">{friend.name}</h2>
              <div className="">
                <span className="badge badge-info"> {friend.status} </span>
              </div>
              <div className="">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <p>{friend.bio}</p>
              <p>{friend.email}</p>
            </div>
            <div className="actions w-full flex flex-col justify-center gap-4">
              <button className="btn btn-outline btn-info ">
                <Image
                  src={bellIcon}
                  alt="Snooze 2 Weeks"
                  width={20}
                  height={20}
                />
                Snooze 2 Weeks
              </button>
              <button className="btn btn-outline btn-primary">Edit</button>
              <button className="btn btn-outline btn-secondary">Delete</button>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-2.5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-base-100 rounded-xl shadow-xl p-6">
              <h2>62</h2>
              <p>Days Since Contact</p>
            </div>
            <div className="card bg-base-100 rounded-xl shadow-xl p-6">
              <h2>{friend.goal}</h2>
              <p>Goal (Days)</p>
            </div>
            <div className="card bg-base-100 rounded-xl shadow-xl p-6">
              <h2>{formattedNextDueDate}</h2>
              <p>Next Due</p>
            </div>
          </div>
          <div className="bg-base-100 rounded-xl shadow-xl p-6 text-left">
            <h2 className="flex items-center justify-between gap-2 text-xl font-semibold">
              Relationship Goal
              <span className="btn btn-ghost">Edit</span>
            </h2>
            <p>
              Connect every{" "}
              <span className="text-bold">{friend.goal} days</span>
            </p>
          </div>
          <div className=" bg-base-100 rounded-xl shadow-xl p-6 ">
            <h2 className="font-semibold text-xl mb-5 text-left ">
              Quick Check-In
            </h2>
            <div className="grid grid-cols1 md:grid-cols-3 gap-4">
              <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 py-5 text-xl">
                <Image
                  src={callIcon}
                  alt="Snooze 2 Weeks"
                  width={20}
                  height={20}
                />
                <span>Call</span>
              </div>
              <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 pace-y-2 py-5 text-xl ">
                <Image
                  src={textIcon}
                  alt="Snooze 2 Weeks"
                  width={20}
                  height={20}
                />
                <span>Text</span>
              </div>
              <div className="bg-slate-100 rounded-xl shadow-xl flex flex-col items-center justify-center p-4 pace-y-2 py-5 text-xl  ">
                <Image
                  src={videoIcon}
                  alt="Snooze 2 Weeks"
                  width={20}
                  height={20}
                />
                <span>video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
