// import ReactPaginate from "react-paginate";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router"; // import Image from "next/image";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();

  const setCurrentPageHandler = (number) => {
    const search = router.query;
    search.page = number.toString();
    setCurrentPage(number);
    router.push({
      query: { ...search },
    });
  };

  useEffect(() => {
    setCurrentPage(
      searchParams.get("page") === null ? 0 : +searchParams.get("page"),
    );
  }, [searchParams]);

  return (
    <div className={"mt-10 w-[40%] m-auto flex justify-center"}>
      <ResponsivePagination
        current={currentPage}
        total={Math.ceil(props.newTotal / props.perPage)}
        onPageChange={setCurrentPageHandler}
      />
    </div>

    // <div className={"flex justify-center"}>
    //   <ReactPaginate
    //     breakLabel="..."
    //     nextLabel={
    //       <span
    //         className={
    //           "bg-white shadow-[0_0_6px_0_rgba(177,177,177,1)] w-[40px] h-[40px] flex justify-center items-center rounded-full"
    //         }
    //       >
    //         <Image
    //           src={"/assets/icons/angle-left.svg"}
    //           alt={"left icon"}
    //           width={20}
    //           height={20}
    //         />
    //       </span>
    //     }
    //     forcePage={
    //       searchParams.get("page") === null ? 0 : searchParams.get("page") - 1
    //     }
    //     onPageChange={handlePageClick}
    //     className={"flex gap-8 my-10"}
    //     pageRangeDisplayed={1}
    //     pageCount={props.newTotal / props.perPage}
    //     previousLabel={
    //       <span
    //         className={
    //           "bg-white shadow-[0_0_6px_0_rgba(177,177,177,1)] w-[40px] h-[40px] flex justify-center items-center rounded-full"
    //         }
    //       >
    //         <Image
    //           src={"/assets/icons/angle-right.svg"}
    //           alt={"left icon"}
    //           width={20}
    //           height={20}
    //         />
    //       </span>
    //     }
    //     activeLinkClassName={"bg-[#aaa] px-2 rounded-full"}
    //     pageClassName={"flex items-center justify-center w-[40px] h-[40px]"}
    //     pageLinkClassName={"w-full h-full flex items-center justify-center"}
    //     renderOnZeroPageCount={null}
    //   />
    // </div>
  );
};

export default Pagination;
