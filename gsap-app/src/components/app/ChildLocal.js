export default function ({ image, viwers, category, className }) {
  return (
    <div className={className}>
      <span>
        <img src={image} alt="" />
        <div>
          <h1>{viwers}</h1>
          <p>{category}</p>
        </div>
      </span>
    </div>
  );
}
