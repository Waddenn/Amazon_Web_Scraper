const handler = async (req, res) => {
  if (req.method === "GET") {
    res.send({ message: "Hello world" });
    return;
  }
  res.status(404).send({ error: "Not found" });
};
export default handler;
