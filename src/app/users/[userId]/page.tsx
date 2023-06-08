import Link from "next/link";
import { Suspense } from "react";

import { GetPosts } from "@/app/lib/getPosts";
import { GetUser } from "@/app/lib/getUser";
import { User } from "@/app/types";
import Posts from "./components/posts";

type Params = {
  params: {
    userId: string;
  };
};

export const UserPosts = async ({ params: { userId } }: Params) => {
  const getUser = GetUser(userId);
  const user: User = await getUser;

  const getPosts = GetPosts(userId);
  return (
    <div className="p-4">
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <Posts promise={getPosts} />
      </Suspense>
      <Link
        href="/users"
        className="bg-gray-500 font-bold p-2 rounded text-white"
      >
        Back
      </Link>
    </div>
  );
};

export default UserPosts;
