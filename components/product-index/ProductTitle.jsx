
function ProductTitle(props) {
    return (
        <div className='flex items-center gap-[0.5rem]'>
            <div className="bg-red_shop w-[0.25rem] h-[20px] rounded-[1rem]"></div>
            <h1 className='font-bold text-[18px]'>{props.title}</h1>
        </div>
    );
}

export default ProductTitle;