import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function FetchData() {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or DB-ID.");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  return query.results; // Retournez directement les résultats
}

// import { Client } from "@notionhq/client";
// import type { NextApiRequest, NextApiResponse } from "next";

// const notionSecret = process.env.NOTION_SECRET;
// const notionDatabaseId = process.env.NOTION_DATABASE_ID;

// const notion = new Client({ auth: notionSecret });

// export default async function FetchData(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (!notionSecret || !notionDatabaseId)
//     throw new Error("Missing notion secret or DB-ID.");

//   const query = await notion.databases.query({
//     database_id: notionDatabaseId,
//   });

//   console.log(query.results);

//   res.status(200).json(query);
// }
