import Fruit from "./Fruit";

export default function Fruits({ fruits }) {
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <Fruit key={index} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
