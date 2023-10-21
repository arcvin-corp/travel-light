import { useState } from "react";
import { TravelItemProps } from "../types";

export default function Item({ item, onHandleDeleteItem, onHandleIsPacked }: TravelItemProps) {
  const [isPacked, setIsPacked] = useState(item.packed);

  function handleDeleteItem(itemId: number) {
    onHandleDeleteItem(itemId);
  }

  function handleIsPacked(itemId: number) {
    setIsPacked(!isPacked);
    onHandleIsPacked(itemId);
  }

  return (
    <li>
      <input type="checkbox" checked={isPacked} onChange={() => handleIsPacked(item.id)} />
      <span style={isPacked ? { color: "green", fontWeight: "bolder" } : {}}>
        {item.description} <span className="qty">{`[${item.quantity}]`}</span>
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
