import Link from "next/link";
import { GetUsers } from "../lib/getUsers";
import { User } from "../types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const getUsers = GetUsers();

  const users: User[] = await getUsers;

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-4">
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="p-2 rounded bg-gray-500 text-white">
        Home
      </Link>
    </div>
  );
};

export default Users;
