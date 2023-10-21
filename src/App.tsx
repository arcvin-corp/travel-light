import { TravelItem } from "./types";
import AddForm from "./components/addForm";
import ItemsList from "./components/itemsList";
import Stats from "./components/stats";
import { useState } from "react";
import { SortType } from "./types";

export default function App() {
  const [packingList, setPackingList] = useState<TravelItem[]>([]);

  function handleAddItem(item: TravelItem) {
    setPackingList((packingList) => [...packingList, item]);
  }

  function handleDeleteItem(itemId: number) {
    setPackingList((packingList) => packingList.filter((travelItem) => travelItem.id !== itemId));
  }

  function handleSort(sortType: string) {
    if (packingList.length > 0) {
      switch (sortType) {
        case SortType.BY_INPUT_ORDER_ASC:
          setPackingList((packingList) => packingList.sort((a, b) => a.id - b.id));
          break;

        case SortType.BY_INPUT_ORDER_DESC:
          setPackingList((packingList) => packingList.sort((a, b) => b.id - a.id));
          break;

        case SortType.BY_DESCRIPTION:
          setPackingList((packingList) => packingList.sort((a, b) => a.description.localeCompare(b.description)));
          break;

        case SortType.BY_PACKED_STATUS:
          setPackingList((packingList) => packingList.sort((a, b) => +b.packed - +a.packed));
          break;

        default:
          console.log(`Sort type ${sortType} is invalid`);
          break;
      }
    }
  }

  function handleClearList() {
    setPackingList(() => []);
  }

  function handleIsPacked(itemId: number) {
    setPackingList((packingList) =>
      packingList.map((item) => {
        if (item.id === itemId) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="app">
      <h1>Far Away</h1>
      <AddForm onHandleAddItem={handleAddItem}></AddForm>
      <ItemsList
        onHandleDeleteItem={handleDeleteItem}
        packingList={packingList}
        onHandleIsPacked={handleIsPacked}
        onHandleClearList={handleClearList}
        onHandleSort={handleSort}
      ></ItemsList>
      <Stats
        itemCount={packingList.length}
        itemsPacked={packingList.reduce((count: number, item: TravelItem) => (item.packed ? count + 1 : count), 0)}
      ></Stats>
    </div>
  );
}
