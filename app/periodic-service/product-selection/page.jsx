import Invoice from "@/components/periodic-service-components/Invoice";
import SelectProduct from "@/components/serviceSelectionComponents/SelectProduct";
const ProductSelection = () => {
    return ( 
        <div className="flex gap-4 xl:gap-10 max-w-[1676px] w-full m-auto mb-10 mt-5 lg:mt-28 px-4">
            <Invoice/>
            <SelectProduct/>
        </div>
     );
}
 
export default ProductSelection;