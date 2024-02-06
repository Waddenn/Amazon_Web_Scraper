export default function CategoryButton({ categoryName, onClick, className }) {
    return (
      <button className={className} onClick={onClick}>
        {categoryName}
      </button>
    );
  }