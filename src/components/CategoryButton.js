import Link from 'next/link';

export default function CategoryButton({ categoryName, path, className }) {
  return (
    <button className={className}>
    <Link href={path} passHref>
        {categoryName}
    </Link>
    </button>
  );
}