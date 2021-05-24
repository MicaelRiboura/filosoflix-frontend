// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { videos, VideoI} from '../../../samples/videos.sample';

export default (req: NextApiRequest, res: NextApiResponse<VideoI[]>) => {
  res.status(200).json(videos.videos);
}
