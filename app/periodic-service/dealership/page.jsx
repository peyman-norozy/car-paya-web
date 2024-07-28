import DealershipIndex from "@/components/Dealership/DealershipIndex";

const Dealership = () => {
    return ( 
        <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto py-4 relative">
          <div className={"w-full lg:w-[calc(100%-424px)] flex flex-col gap-8 md:gap-10 mr-auto"}>
            <DealershipIndex/>  
          </div>
      </div>
     );
}
 
export default Dealership;