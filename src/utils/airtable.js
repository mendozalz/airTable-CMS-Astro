import { default as EleventyFetch } from "@11ty/eleventy-fetch";

// Setting the Airtable secret API key and the Airtable base id
// from environment variables
const airtableToken = import.meta.env.AIRTABLE_API_KEY;
const airtableBaseId = import.meta.env.AIRTABLE_BASE_ID;

export async function getRecords(table, sortField, sortDirection) {
  let url = `https://api.airtable.com/v0/app4sEBHFIHtauNJv/Restauranci?pageSize=5`;

  const response = await EleventyFetch(url, {
    duration: "1h",

    type: "json",

    fetchOptions: {
      headers: {
        authorization: `Bearer ${airtableToken}`,
      },
    },
  });

  let { records } = await response;
  console.log(records);
  return records;
}
