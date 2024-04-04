import { Job } from "../../../type";
import { useJobsStore } from "@/hooks/context/jobs";

interface Props {
  data: Job;
}

const Card: React.FC<Props> = ({ data }) => {
  const {
    company,
    logo,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
    tablets,
  } = data;

  const { addTools } = useJobsStore((state) => state);

  const onAdd = (tool: string) => {
    addTools(tool);
  };

  return (
    <li
      className={`relative flex lg:flex-row lg:justify-between flex-col gap-5 items-center bg-white sm:px-10 sm:py-7 px-5 pt-7 pb-5 rounded-md shadow-lg ${
        isFeatured ? "border-l-4 border-cyanPrimary" : ""
      }`}
    >
      <div className="flex items-center gap-5 lg:border-none border-b-2 pb-5">
        <div className="absolute sm:static -top-8 left-6">
          <img src={logo} alt="Company Logo" className="w-12 sm:w-auto" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 items-center">
            <h4 className="font-SpartanBold text-cyanPrimary">{company}</h4>
            <span className="flex gap-2">
              {isNew && (
                <button className="bg-cyanPrimary text-white pt-1 px-2 font-SpartanBold rounded-3xl text-sm">
                  NEW!
                </button>
              )}
              {isFeatured && (
                <button className="bg-cyanDarker text-white pt-1 px-2 font-SpartanBold block rounded-3xl text-sm">
                  FEATURED
                </button>
              )}
            </span>
          </div>
          <div>
            <h2 className="font-SpartanBold hover:text-cyanPrimary cursor-pointer text-xl">
              {position}
            </h2>
          </div>
          <div className="flex gap-8 font-SpartanMed text-gray-400">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap xl:flex-nowrap gap-5 ">
        {tablets.map((tool) => (
          <li
            key={tool}
            className="bg-cyanTablets text-cyanPrimary hover:bg-cyanPrimary hover:text-white px-2 pt-2 pb-1 font-SpartanBold cursor-pointer rounded-md"
            onClick={() => onAdd(tool)}
          >
            {tool}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Card;
