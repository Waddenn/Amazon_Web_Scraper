import fs from "fs"
import path from "path"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "src/data", "users.json")
    const jsonData = fs.readFileSync(filePath)
    let users = JSON.parse(jsonData)

    const userIndex = users.findIndex(
      (user) => user.username === req.cookies.username,
    )
    users.splice(userIndex, 1)
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2))

    res.status(200).json({ message: "Compte supprimé avec succès" })
  } else {
    res.status(405).send("Method Not Allowed")
  }
}
