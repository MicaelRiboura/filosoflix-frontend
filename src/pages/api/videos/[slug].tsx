import { NextApiRequest, NextApiResponse } from 'next';
import { videos, VideoI} from '../../../samples/videos.sample';

export default (req: NextApiRequest, res: NextApiResponse<VideoI>)  => {
  const {
    query: { slug },
  } = req;

  const video = videos.videos.find(video => video.slug === slug);
  
  if(video){
    return res.json(video);
  }
}