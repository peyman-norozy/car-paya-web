import Invoice from "@/components/periodic-service-components/Invoice";
import SelectService from "@/components/serviceSelectionComponents/SelectService";
const serviceSelection = () => {
    return ( 
        <div className="flex gap-10 max-w-[1676px] w-full m-auto mb-10 mt-28">
            <Invoice/>
            <SelectService/>
        </div>
     );
}
 
export default serviceSelection;