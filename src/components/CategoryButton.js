import Link from 'next/link';

export default function CategoryButton({ categoryName, path, className }) {
  return (
    <Link href={path} passHref>
    <button className={className}>
        {categoryName}
    </button>
    </Link>
  );
}