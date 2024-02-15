export default function Fruit({ fruit }) {
  return (
    <>
      {fruit.price > 1.1 ? (
        <li key={fruit.name}>
          {fruit.emoji} {fruit.name} ${fruit.price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
