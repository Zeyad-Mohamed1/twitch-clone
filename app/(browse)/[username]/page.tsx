import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserpageProps {
  params: {
    username: string;
  };
}
const Userpage = async ({ params }: UserpageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>username : {user.username}</p>
      <p>id : {user.id}</p>
      <p>isFollowing : {isFollowing.toString()}</p>
      <Actions userId={user?.id} isFollowing={isFollowing} />
    </div>
  );
};

export default Userpage;
