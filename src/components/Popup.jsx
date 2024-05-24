const Popup = ({ popup, setPopup, onClick }) => {
  return (
    <div className="fixed inset-0 flex flex-col z-50 bg-black/40 w-screen h-screen  justify-center">
      <div className="bg-white rounded-lg w-fit self-center p-3 flex flex-col gap-y-3">
        <div className="text-2xl font-bold">{popup.title}</div>
        <div className="text-sm">{popup.message}</div>
        <div className="flex flex-row w-full justify-end">
          <button
            className={`rounded-lg px-2 text-lg hover:-translate-y-1 duration-300`}
            onClick={() => setPopup({ ...popup, visible: false })}
          >
            cancel
          </button>
          <button
            className={`${popup.color} rounded-lg px-2 text-lg hover:-translate-y-1 duration-300`}
            onClick={() => {
              onClick();
              setPopup({ ...popup, visible: false });
            }}
          >
            {popup.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
