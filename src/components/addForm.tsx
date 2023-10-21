import { FormEvent, useState } from "react";
import { TravelItem } from "../types";

function AddForm({ onHandleAddItem }: { onHandleAddItem: (item: TravelItem) => void }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleAddItem(e: FormEvent) {
    e.preventDefault();
    if (quantity >= 1 && description) {
      onHandleAddItem({ id: Date.now(), description, quantity, packed: false });
      setQuantity(1);
      setDescription("");
    }
  }

  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <h3>What do you need for your trip ✈️</h3>
      <label htmlFor="quantity">Qty.</label>
      <select value={quantity} id="quantity" onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((optionId) => (
          <option key={optionId} value={optionId}>
            {optionId}
          </option>
        ))}
      </select>
      <label htmlFor="itemDescription">Description</label>
      <input
        type="text"
        placeholder="Add Items..."
        id="itemDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddForm;
