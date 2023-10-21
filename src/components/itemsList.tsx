import Item from "./item";
import { ItemsListProps, SortType } from "../types";
import { ChangeEvent, useState } from "react";

function ItemsList({
  packingList,
  onHandleDeleteItem,
  onHandleIsPacked,
  onHandleClearList,
  onHandleSort,
}: ItemsListProps) {
  const [sortType, setSortType] = useState("");

  function handleDeleteItem(itemId: number) {
    onHandleDeleteItem(itemId);
  }

  function handleIsPacked(itemId: number) {
    onHandleIsPacked(itemId);
  }

  function handleSort(e: ChangeEvent<HTMLSelectElement>) {
    const sortType = e.target.value;
    setSortType(sortType);
    onHandleSort(sortType);
  }

  return (
    <div className="list">
      <ul>
        {packingList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDeleteItem={handleDeleteItem}
            onHandleIsPacked={handleIsPacked}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={sortType} onChange={(e) => handleSort(e)}>
          <option value={SortType.BY_INPUT_ORDER_ASC}>Sort by input order(Oldest)</option>
          <option value={SortType.BY_INPUT_ORDER_DESC}>Sort by input order(Newest)</option>
          <option value={SortType.BY_DESCRIPTION}>Sort by description</option>
          <option value={SortType.BY_PACKED_STATUS}>Sort by packed status</option>
        </select>
        <button onClick={onHandleClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default ItemsList;
