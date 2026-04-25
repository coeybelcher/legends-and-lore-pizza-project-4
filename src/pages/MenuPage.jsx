import { useEffect, useState } from "react";

function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://legends-and-lore-pizza-project-4.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuPage;