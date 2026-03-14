export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    service: 'namecheap-batchit-api',
    version: '1.0.0'
  });
}
