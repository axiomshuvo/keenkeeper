import Image from "next/image";
import Link from "next/link";

const tagBadgeMap = {
  "close friend": "badge-primary",
  "family friend": "badge-secondary",
  college: "badge-accent",
  work: "badge-info",
  mentor: "badge-success",
  gym: "badge-warning",
  weekend: "badge-error",
  school: "badge-ghost",
  gaming: "badge-outline",
  travel: "badge-primary",
  startup: "badge-secondary",
  tech: "badge-accent",
  music: "badge-info",
  neighbor: "badge-success",
  football: "badge-warning",
  design: "badge-error",
  creative: "badge-outline",
  "remote friend": "badge-outline",
  coding: "badge-primary",
  books: "badge-secondary",
  coffee: "badge-accent",
  basketball: "badge-info",
  "old friend": "badge-success",
  events: "badge-warning",
  photography: "badge-error",
  foodie: "badge-ghost",
  entrepreneur: "badge-outline",
  university: "badge-primary",
};

export default function FriendCard({ friend }) {
  const borderClass =
    friend.status === "on-track"
      ? "bg-green-50"
      : friend.status === "almost due"
        ? "bg-yellow-50"
        : friend.status === "overdue"
          ? "bg-red-50"
          : "";

  const getTagBadgeClass = (tag) => tagBadgeMap[tag] || "badge-info";

  return (
    <Link
      href={`/friends/${friend.id}`}
      className={`flex justify-center flex-col items-center rounded-xl shadow-sm bg-base-100 p-5 space-y-2 ${borderClass}`}
    >
      <Image
        className="rounded-full"
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
      />
      <h2>{friend.name}</h2>

      <div className="flex flex-col items-center space-y-2">
        <span>{friend.lastContact}</span>
        <span className="flex gap-1 flex-wrap justify-center">
          {friend.tags.map((tag, index) => (
            <span key={index} className={`badge ${getTagBadgeClass(tag)}`}>
              {tag}
            </span>
          ))}
        </span>
        <span
          className={`badge ${
            friend.status === "on-track"
              ? "badge-success"
              : friend.status === "almost due"
                ? "badge-warning"
                : friend.status === "overdue"
                  ? "badge-error"
                  : "badge-warning"
          }`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
}
