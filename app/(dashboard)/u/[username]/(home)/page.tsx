import React from "react";
import { currentUser } from "@clerk/nextjs/server";

import { getUserByUsername } from "@/lib/user-service";

export default async function CreatorPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const externalUser = await currentUser();
  const user = await getUserByUsername(username);

  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <h1>{user.username}</h1>
    </div>
  );
}
