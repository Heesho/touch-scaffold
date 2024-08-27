const Stats = () => {
  return (
    <div className="m-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-lg font-bold">Touch</div>
          <div className="text-sm">Earned from touching a TouchPad.</div>
        </div>
        <div className="flex flex-row font-bold text-right">
          <div className="text-purple-600">◆ </div>
          <div>2.21</div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-lg font-bold">Own</div>
          <div className="text-sm">Earned from owning a TouchPad.</div>
        </div>
        <div className="flex flex-row font-bold text-right">
          <div className="text-purple-600">◆ </div>
          <div>2.21</div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-lg font-bold">Create</div>
          <div className="text-sm">Earned from cerating a TouchPad.</div>
        </div>
        <div className="flex flex-row font-bold text-right">
          <div className="text-purple-600">◆ </div>
          <div>2.21</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
