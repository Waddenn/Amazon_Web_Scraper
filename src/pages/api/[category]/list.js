// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default handler = async (req, res) => {
  if (req.body === "GET") {
    res.send("Hello world");
    return;
  }
  res.status(404).send();
};
