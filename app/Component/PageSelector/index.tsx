import {Pagination} from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type PageSelectorProps = {
  pageCount: number;
  setResultsOffSet: any;
};

const PageSelector = ({pageCount, setResultsOffSet}: PageSelectorProps) => {
    const urlParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        const offset = 12 * (value - 1);
        addOffset(offset);
    }

    const addOffset = (offset: number) => {
      const newOffset = new URLSearchParams(urlParams);
      newOffset.set("offset", offset.toString());
      setResultsOffSet(offset);
      replace(`${pathname}?${newOffset.toString()}`)
    };

    return (
      <>
        <Pagination
          size="large"
          count={pageCount}
          onChange={handlePageChange}
          sx={{ backgroundColor: "#f6a4a4", borderRadius: "10px", margin: "20px", padding: "10px"}}
        />
      </>
    );
};

export default PageSelector;