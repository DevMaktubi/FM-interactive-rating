export function PostForm() {
  return (
    <div className="flex flex-col md:p-8 py-8 px-6 items-center md:max-w-[412px] max-w-[327px] h-[360px] md:h-[416px] bg-gradient-to-b from-gradient-1-from to-gradient-1-to rounded-2xl">
      <div className="md:py-3 w-full flex justify-center items-center mb-5">
        <img src="/assets/illustration-thank-you.svg" alt="Thank you image" />
      </div>
      <div className="text-center pt-1.5 h-8 w-48 bg-blue-dark rounded-3xl md:mb-8 mb-6">
        <h3 className=" text-primary text-body-medium leading-6">
          You selected 4 out of 5
        </h3>
      </div>
      <h1 className="text-white text-heading-large font-bold mb-2">
        Thank you!
      </h1>
      <p className="text-center text-grey-light text-body-medium leading-6 md:pr-2">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
