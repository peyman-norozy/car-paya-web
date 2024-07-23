import Invoice from "@/components/periodic-service-components/Invoice";
import SelectService from "@/components/serviceSelectionComponents/SelectService";
const serviceSelection = () => {
    return ( 
        <div className="flex gap-10 max-w-[1676px] w-full px-2 sm:px-4 m-auto mb-10 mt-5 lg:mt-28">
            <Invoice/>
            <SelectService/>
        </div>
     );
}
 
export default serviceSelection;