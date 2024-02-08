"use client";

import { PropsWithChildren } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingSkeleton = () => {
  return (
    <section>
      <div className="max-h-[200px] flex flex-col gap-3 overflow-scroll">
        <ul className="flex flex-col gap-3">
          {Array(2)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 w-full">
                    <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center">
                      <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="w-full flex flex-col gap-1 justify-center">
                      <p className="font-semibold text-md text-opacity-[72%]">
                        <Skeleton height={20} width={`100%`} />
                      </p>
                      <Skeleton width={`100%`} />
                    </div>
                  </div>
                  <Skeleton height={20} width={`100%`} />
                </div>
              </div>
            ))}
        </ul>
      </div>
    </section>
  );
};
