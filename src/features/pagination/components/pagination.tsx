import { LeftButton, RightButton } from "./index";
import PaginationProps from "../types/pagination.interface";
import { ArrowLeftIcon, ArrowRightIcon } from "~/shared/icons";

export const Pagination = ({ onPrevPage, onNextPage }: PaginationProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <LeftButton onPrevPage={onPrevPage} icon={<ArrowLeftIcon />} />
      <RightButton onNextPage={onNextPage} icon={<ArrowRightIcon />} />
    </div>
  );
};
