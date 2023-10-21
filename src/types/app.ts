export interface TravelItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export type ItemsListProps = {
  packingList: TravelItem[];
  onHandleDeleteItem: (itemId: number) => void;
  onHandleIsPacked: (itemId: number) => void;
  onHandleClearList: () => void;
  onHandleSort: (sortType: string) => void;
};

export type TravelItemProps = {
  item: TravelItem;
  onHandleDeleteItem: (itemId: number) => void;
  onHandleIsPacked: (itemId: number) => void;
};

export enum SortType {
  BY_INPUT_ORDER_ASC = "BY_INPUT_ORDER_ASC",
  BY_INPUT_ORDER_DESC = "BY_INPUT_ORDER_DESC",
  BY_DESCRIPTION = "BY_DESCRIPTION",
  BY_PACKED_STATUS = "BY_PACKED_STATUS",
}
