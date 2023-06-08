export const GetUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error("Error to fetch data!");

  return res.json();
};
