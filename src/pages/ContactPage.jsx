import { useApp } from "../context/AppContext";

export default function MenuPage() {
  const { pizzas } = useApp();

  return (
    <div>
      <h2>Menu</h2>
      {pizzas.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}