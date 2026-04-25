import { useEffect, useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newPizza = {
      name: name,
      price: Number(price)
    };

    fetch("http://localhost:3001/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPizza)
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu([...menu, data]);
        setName("");
        setPrice("");
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/api/menu/${id}`, {
      method: "DELETE"
    }).then(() => {
      setMenu(menu.filter((item) => item.id !== id));
    });
  }

  function handleEdit(item) {
    const newName = prompt("New name:", item.name);
    const newPrice = prompt("New price:", item.price);

    if (!newName || !newPrice) return;

    fetch(`http://localhost:3001/api/menu/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName,
        price: Number(newPrice)
      })
    }).then(() => {
      setMenu(
        menu.map((m) =>
          m.id === item.id
            ? { ...m, name: newName, price: Number(newPrice) }
            : m
        )
      );
    });
  }

  return (
    <div>
      <h2>Add a Pizza</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pizza name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Pizza</button>
      </form>

      <h2>Menu</h2>

      {menu.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleEdit(item)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;