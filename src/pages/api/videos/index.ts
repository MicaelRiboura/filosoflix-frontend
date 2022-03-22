// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { data, IVideo } from '../../../samples/videos.sample';

export default (req: NextApiRequest, res: NextApiResponse<IVideo[]>) => {
  res.status(200).json(data.videos);
}
