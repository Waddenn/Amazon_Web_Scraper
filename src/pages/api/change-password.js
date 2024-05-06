import fs from "fs"
import path from "path"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { oldPassword, newPassword } = req.body
    const filePath = path.join(process.cwd(), "src/data", "users.json")
    const jsonData = fs.readFileSync(filePath)
    const users = JSON.parse(jsonData)

    const userIndex = users.findIndex(
      (user) => user.username === req.cookies.username,
    )
    const user = users[userIndex]

    if (user.password === oldPassword) {
      user.password = newPassword
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
      res.status(200).json({ message: "Mot de passe modifié avec succès" })
    } else {
      res.status(401).json({ message: "Ancien mot de passe incorrect" })
    }
  } else {
    res.status(405).send("Method Not Allowed")
  }
}
