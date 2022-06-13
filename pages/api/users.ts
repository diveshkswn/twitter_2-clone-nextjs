// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  fetchUsers().then((d) => {
    res.status(200).json(d[0]);
  });
//   res.status(200).json({ name: 'John Doe' });
}
