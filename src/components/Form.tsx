import CN from "classnames";
import { useState } from "react";

export function Form({ onSubmit }: { onSubmit: () => void }) {
  const [selectedButton, setSelectedButton] = useState(1);
  return (
    <div className="flex flex-col  px-6 pt-4 pb-6 md:p-8 items-center md:max-w-[412px] max-w-[327px] h-[360px] md:h-[416px] bg-gradient-to-b from-gradient-1-from to-gradient-1-to rounded-2xl">
      <div className="flex justify-start w-full md:mb-8 mb-4">
        <div className="md:p-4 p-3 bg-blue-dark rounded-full">
          <img
            className="rounded-full"
            src="/assets/icon-star.svg"
            alt="Star icon"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start text-start mb-6">
        <h1 className="text-white md:text-heading-large text-rating-large font-bold md:leading-9 leading-8  mb-2">
          How did we do?
        </h1>
        <p className="text-grey-light text-body-medium leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex justify-between items-center w-full md:mb-8 mb-6">
        <button
          className={CN(
            "md:w-[51px] md:h-[51px] w-[42px] h-[42px] rounded-full  md:text-rating-medium text-[14px] font-bold  transition-colors hover:text-white",
            {
              "bg-primary text-white": selectedButton === 1,
              "text-grey-medium bg-blue-dark hover:bg-grey-medium":
                selectedButton !== 1,
            }
          )}
          onClick={() => setSelectedButton(1)}
        >
          1
        </button>
        <button
          className={CN(
            "md:w-[51px] md:h-[51px] w-[42px] h-[42px] rounded-full  md:text-rating-medium text-[14px] font-bold  transition-colors hover:text-white",
            {
              "bg-primary text-white": selectedButton === 2,
              "text-grey-medium bg-blue-dark hover:bg-grey-medium":
                selectedButton !== 2,
            }
          )}
          onClick={() => setSelectedButton(2)}
        >
          2
        </button>
        <button
          className={CN(
            "md:w-[51px] md:h-[51px] w-[42px] h-[42px] rounded-full  md:text-rating-medium text-[14px] font-bold  transition-colors hover:text-white",
            {
              "bg-primary text-white": selectedButton === 3,
              "text-grey-medium bg-blue-dark hover:bg-grey-medium":
                selectedButton !== 3,
            }
          )}
          onClick={() => setSelectedButton(3)}
        >
          3
        </button>
        <button
          className={CN(
            "md:w-[51px] md:h-[51px] w-[42px] h-[42px] rounded-full  md:text-rating-medium text-[14px] font-bold  transition-colors hover:text-white",
            {
              "bg-primary text-white": selectedButton === 4,
              "text-grey-medium bg-blue-dark hover:bg-grey-medium":
                selectedButton !== 4,
            }
          )}
          onClick={() => setSelectedButton(4)}
        >
          4
        </button>
        <button
          className={CN(
            "md:w-[51px] md:h-[51px] w-[42px] h-[42px] rounded-full  md:text-rating-medium text-[14px] font-bold  transition-colors hover:text-white",
            {
              "bg-primary text-white": selectedButton === 5,
              "text-grey-medium bg-blue-dark hover:bg-grey-medium":
                selectedButton !== 5,
            }
          )}
          onClick={() => setSelectedButton(5)}
        >
          5
        </button>
      </div>
      <button
        className="text-white text-heading-medium uppercase tracking-[2px] rounded-3xl bg-primary w-full h-11 py-3 mb-3 md:py-0 md:mb-0 flex justify-center items-center hover:bg-white hover:text-primary transition-colors"
        onClick={() => onSubmit()}
      >
        Submit
      </button>
    </div>
  );
}
