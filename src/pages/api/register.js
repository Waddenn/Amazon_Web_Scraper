import fs from "fs"
import path from "path"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body
    const filePath = path.join(process.cwd(), "src/data", "users.json")
    const jsonData = fs.readFileSync(filePath)
    const users = JSON.parse(jsonData)

    if (users.find((u) => u.username === username)) {
      res.status(409).json({ message: "Nom d’utilisateur déjà pris" })
    } else {
      const newUser = { username, password }
      users.push(newUser)
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
      res.status(200).json({ message: "Utilisateur créé" })
    }
  } else {
    res.status(405).send("Method Not Allowed")
  }
}
