export default async function FriendDetailsPage({ params }) {
  const { slug } = await params;
  console.log("Friend slug:", slug);

  return (
    <div className="container mx-auto">
      <h1>Friend Details Page</h1>
      <div className="flex justify-center flex-col items-center rounded-xl shadow-sm bg-base-100 p-5 space-y-2">
        <img src="" alt="" />
        <h2>name</h2>

        <div className="flex flex-col items-center space-y-2">
          <span>{}</span>
          <span className="flex gap-1">
            <span className="badge badge-info"></span>
          </span>
          <span className="badge badge-warning">{}</span>
        </div>
      </div>
    </div>
  );
}
