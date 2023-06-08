export const GetPosts = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) throw new Error("Error to fetch data!");

  return res.json();
};
