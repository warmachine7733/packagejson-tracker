import { NextApiRequest, NextApiResponse } from 'next'
import { getRegistryMetadata } from 'query-registry';
export default async function handler(req, res) {
  const data = await getRegistryMetadata();

  
  // console.log(data);
  res.status(200).json(data)
}