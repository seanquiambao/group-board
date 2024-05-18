const Size = ({ tools, setTools }) => {
  return (
    <div className="flex flex-col gap-y-2">
      Size
      <div className="flex flex-row gap-x-2 items-center text-sm">
        <input
          onChange={(e) => setTools({ ...tools, size: e.target.value })}
          type="range"
          min="1"
          max="25"
          defaultValue={tools.size}
        />
        {tools.size}
      </div>
    </div>
  );
};

export default Size;
