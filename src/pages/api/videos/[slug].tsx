import { NextApiRequest, NextApiResponse } from 'next';
import { data, IVideo} from '../../../samples/videos.sample';

export default (req: NextApiRequest, res: NextApiResponse<IVideo>)  => {
  const {
    query: { slug },
  } = req;

  const video = data.videos.find(video => video.slug === slug);
  
  if(video){
    return res.json(video);
  }
}