import { readFile, writeFile } from "node:fs/promises"

export const readJson = async (fileName) => {
  try {
    return JSON.parse(
      await readFile(`./${fileName}.json`, { encoding: "utf-8" }),
    )
  } catch (error) {
    return []
  }
}

export const writeJson = async (fileName, dataJson) => {
  await writeFile(
    `./${fileName}.json`,
    JSON.stringify(dataJson, null, 2),
    "utf-8",
  )
}
