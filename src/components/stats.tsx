function Stats({ itemCount, itemsPacked }: { itemCount: number; itemsPacked: number }) {
  return (
    <div className="stats">
      💼
      <span>
        You have <span className="stats-text">{itemCount}</span> items on your list, and you already packed{" "}
        <span className="stats-text">{itemsPacked}</span>
        {` [ ${Math.floor(itemCount ? (itemsPacked / itemCount) * 100 : 0)}% ]`}
      </span>
    </div>
  );
}

export default Stats;
