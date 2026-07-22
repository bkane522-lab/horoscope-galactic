export default function handler(req,res){res.status(200).json(require('../.well-known/assetlinks.json'))}
