import Link from "next/link"

const CategoryButton = ({ categoryName, path, className }) => (
  <Link href={path} passHref>
    <button className={className}>{categoryName}</button>
  </Link>
)

export default CategoryButton
