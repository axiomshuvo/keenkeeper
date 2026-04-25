import Image from "next/image";

export default function imageIcon({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
}
