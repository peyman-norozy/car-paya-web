import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";

const PeriodicService = (props) => {
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto py-4 relative">
      <div className={"w-full lg:w-[calc(100%-424px)] mr-auto"}>
        <PeriodicServiceIndex searchParams={props.searchParams} />
      </div>
    </div>
  );
};

export default PeriodicService;
