type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  pizza: Pizza[];
  status: "Ordered" | "Complete";
};

let menu: Pizza[] = [
  { id: 1, name: "marghareta1", price: 18 },
  { id: 2, name: "marghareta2", price: 28 },
  { id: 3, name: "marghareta3", price: 38 },
  { id: 4, name: "marghareta4", price: 48 },
  { id: 5, name: "marghareta5", price: 58 },
];

let cashRegister: number = 100;
const orderQueue: Order[] = [];

// Adds a pizza to the menu with an auto-generated ID
function addPizzaToMenu(newPizza: Omit<Pizza, "id">): void {
  const newId = getNextId();
  const pizzaWithId: Pizza = {id: newId, ...newPizza }; // Add the auto-generated ID
  menu = [...menu, pizzaWithId];
  console.log("Updated Menu !: ", menu);
}

// Places an order and adds it to the queue
function placeOrder(pizzaIds: number[]): void {
  const orderedPizzas: Pizza[] = [];
  for (const id of pizzaIds) {
    const pizza = menu.find((p) => p.id === id);
    if (pizza) orderedPizzas.push(pizza);
  }
  if (orderedPizzas.length === 0) {
    console.log("No valid pizzas in order.");
    return;
  }
  const newOrder: Order = {
    pizza: orderedPizzas,
    status: "Ordered",
  };
  orderQueue.push(newOrder);
  console.log("Order placed:", newOrder);
}

// Processes the next order in the queue
function completeOrder(): void {
  const order = orderQueue.find((o) => o.status === "Ordered");
  if (!order) {
    console.log("No orders to process.");
    return;
  }
  order.status = "Complete";
  const total = order.pizza.reduce((sum, p) => sum + p.price, 0);
  cashRegister += total;
  console.log(`Order completed. Total: $${total}. Cash register: $${cashRegister}`);
}

// Generates the next unique ID for a pizza
function getNextId(): number {
  return menu.length > 0 ? Math.max(...menu.map((p) => p.id)) + 1 : 1;
}

// Example Usage:
addPizzaToMenu({ name: "marghareta6", price: 68 }); // ID auto-assigned
addPizzaToMenu({ name: "marghareta7", price: 78 }); // ID auto-assigned
placeOrder([6, 7]); // Place order for pizzas with IDs 6 and 7
completeOrder(); // Process the order, updating cash register