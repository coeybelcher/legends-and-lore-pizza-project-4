import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = "http://localhost:3001";

export function AppProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API}/pizzas`)
      .then(res => res.json())
      .then(setPizzas);

    fetch(`${API}/reviews`)
      .then(res => res.json())
      .then(setReviews);
  }, []);

  function addReview(review) {
    fetch(`${API}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(newReview => setReviews(prev => [newReview, ...prev]));
  }

  return (
    <AppContext.Provider value={{ pizzas, reviews, addReview }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}