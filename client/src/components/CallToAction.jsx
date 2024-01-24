import { Button } from "flowbite-react";

export default function CallToAction() {
  const handleClick = () => {
    window.open("https://www.sarunas.top/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to check my other project?</h2>
        <p className="text-gray-500 my-2">
          Checkout this instagram like app built with react and appwrite!
        </p>
        <Button
          onClick={handleClick}
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          Tapsnoklis
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://i.postimg.cc/Xvbt9JxY/side-img3.png"
          alt="Project Image"
        />
      </div>
    </div>
  );
}
