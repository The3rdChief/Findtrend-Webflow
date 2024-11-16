/* eslint-disable react/prop-types */
const DealSwitcher = ({ plan, setPlan }) => {
  const handleSwitch = () => {
    if (plan == "year") {
      setPlan("month");
    } else {
      setPlan("year");
    }
  };
  return (
    <button
      onClick={handleSwitch}
      className={`w-16 h-8  rounded-full relative transition-all duration-200 ${
        plan == "month" ? "bg-grey200" : "bg-primColor"
      }`}
    >
      <div
        className={`size-5 rounded-full transition-all duration-200 absolute top-1/2 -translate-y-1/2  ${
          plan == "month" ? "bg-primColor left-2" : "bg-grey200 left-9"
        }`}
      ></div>
    </button>
  );
};

export default DealSwitcher;
