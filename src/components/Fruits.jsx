export default function Fruits({ fruits }) {
  return (
    // <div>
    //   <h2>Fruits</h2>
    //   <ul>
    //     {fruits.map((fruit, index) => {
    //       return <li key={index}>{fruit}</li>;
    //     })}
    //   </ul>
    // </div>
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.emoji} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
