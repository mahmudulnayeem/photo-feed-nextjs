import Image from "next/image";

const PhotoLoadingComponent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 animate-pulse">
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <div className="bg-slate-700 w-full h-full max-h-[70vh] mx-auto rounded-md" />
      </div>

      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <div className="bg-slate-400 max-w-full  h-10 mx-auto rounded-md" />
        <div className="text-xs lg:text-sm text-black/60 mb-6 mt-3 flex items-start gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-slate-400  w-16 h-5 mx-auto rounded-md"
            />
          ))}
        </div>

        <div className="space-y-2.5  text-xs lg:text-sm ">
          <div className="flex justify-between w-full ">
            <span className="bg-slate-400  w-16 h-5  rounded-md" />
            <span className="bg-slate-400  w-16 h-5  rounded-md" />
          </div>

          <div className="flex justify-between w-full ">
            <span className="bg-slate-400  w-20 h-5  rounded-md" />
            <span className="bg-slate-400  w-16 h-5  rounded-md" />
          </div>

          <div className="flex justify-between w-full ">
            <span className="bg-slate-400  w-16 h-5  rounded-md" />
            <span className="bg-slate-400  w-24 h-5  rounded-md" />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="bg-slate-400  size-12 lg:size-14 rounded-full" />

              <div className="space-y-3">
                <p className="bg-slate-400  w-20 h-3  rounded-md"></p>
                <p className="bg-slate-500  w-16 h-2  rounded-md"></p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/assets/icons/follow.svg"
                className="w-5 h-5"
                width={50}
                height={50}
                alt="follow"
              />
              <span className="bg-slate-400  w-16 h-3  rounded-md" />
            </button>
          </div>

          <p className="text-xs lg:text-sm text-black/60"></p>
        </div>

        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/heart.svg"
                className="w-5 h-5"
                width={50}
                height={50}
                alt="heart"
              />{" "}
              <p className="bg-slate-400  w-12 h-3  rounded-md"></p>
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/save.svg"
                className="w-5 h-5"
                width={50}
                height={50}
                alt="save"
              />
              <p className="bg-slate-400  w-12 h-3  rounded-md"></p>
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/share.svg"
                className="w-5 h-5"
                width={50}
                height={50}
                alt="share"
              />
              <p className="bg-slate-400  w-12 h-3  rounded-md"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoLoadingComponent;
