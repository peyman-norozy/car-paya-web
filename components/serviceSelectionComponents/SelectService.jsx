import Link from "next/link";

const SelectService = (props) => {

    const data = [{
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:true,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    },
    {
        name:"تعویض روغن موتور",
        query:"roghan",
        selected:false,
        product:"روغن موتور کاسپین"
    }]
    
    return ( 
        <div className="w-full border border-[#EAEAEA] flex flex-col">
                <div className="bg-[#EAEAEA] flex flex-col gap-1 items-start px-10 py-5">
                    <h1 className="text-18">خدمات سرويس دوره‌ای</h1>
                    <span className="text-14">(شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات اقدام مي‌نمايد)</span>
                </div> 
                <div className="grid grid-cols-4 gap-4 p-8">
                    {data.map((item)=>(
                    <Link href={`/periodic-service/product-selection?service=${item.query}`} className="p-1">
                        <div className={`shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] rounded-lg flex flex-col items-center p-6 gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 relative ${item.selected?"border-2 border-lime-500 ":""}`}>
                            <div className="size-[125px] bg-amber-600 rounded-lg"></div>
                            <span className="text-18">{item.selected?item.product:item.name}</span>
                            {item.selected&&<i className="cc-twitter text-[32px] p-2 bg-[#00000020] rounded-lg absolute top-2 left-2 text-red-600"/>}
                        </div>
                    </Link>
                    ))}
                </div>
        </div>
     )
}
 
export default SelectService;