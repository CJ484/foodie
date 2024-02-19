import { Skeleton } from "@mui/material";

const SkeletonCard = ({arrayNumber}: {arrayNumber: number}) => {
  const skeletonArray = Array.from({ length: arrayNumber }, (_, index) => index);
  return (
    <>
      {skeletonArray.map((_, index) => {
        return (
          <div key={index} style={{ display: "flex", justifyContent: "center", width: "auto", position: "relative" }}>
            <Skeleton width={400} height={300} variant="rounded" />
            <Skeleton
              width={380}
              sx={{ fontSize: "5rem", position: "absolute", bottom: "0" }}
              variant="text"
            />
          </div>
        );
      })}
    </>
  );
};

export default SkeletonCard;
