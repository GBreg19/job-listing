import { useEffect, useMemo, useState } from "react";
import { Data, Job } from "../type";
import { Card } from "./widgets";
import jobs from "@/data/data.json";
import { useJobsStore } from "@/hooks/context/jobs";

type Jobs = Record<string, Job>;

const List = () => {
  const [data, setData] = useState<Jobs>({});
  const { tools, reset, removeTools } = useJobsStore((state) => state);

  // Convert filterData to usememo and use reduce instead of forEach

  const filteredJobs: Jobs = useMemo(
    () =>
      Object.entries(data).reduce((acc, [id, value]) => {
        const tablets = value.tablets;
        if (tools.every((tool) => tablets.includes(tool))) {
          acc[id] = value;
        }
        return acc;
      }, {} as Jobs),
    [data, tools]
  );

  useEffect(() => {
    let helper: Jobs = {};
    jobs.forEach((job: Data) => {
      const { id, ...rest } = job;

      if (!id) return;
      helper[id] = {
        company: rest.company,
        logo: rest.logo,
        isNew: rest.isNew,
        isFeatured: rest.isFeatured,
        position: rest.position,
        postedAt: rest.postedAt,
        contract: rest.contract,
        location: rest.location,
        tablets: [rest.role, rest.level, ...rest.languages, ...rest.tools],
      };
    });
    setData(helper);
  }, []);

  const onReset = () => {
    reset();
  };

  const onRemove = (tool: string) => {
    removeTools(tool);
  };

  return (
    <div className="w-9/12 m-auto mt-20 mb-44 relative">
      {tools.length > 0 && (
        <div className="absolute w-[100%] -top-[120px] shadow-lg rounded-md bg-white py-5 px-10 max-h-28 overflow-auto flex justify-between items-center gap-10">
          <ul className="flex flex-wrap gap-5">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-cyanTablets text-cyanPrimary font-SpartanBold cursor-pointer rounded-md flex"
              >
                <button className="px-2 pt-1 rounded-b-md rounded-tl-md">
                  {tool}
                </button>
                <button
                  onClick={() => onRemove(tool)}
                  className="bg-cyanPrimary hover:bg-cyanDarker block text-white w-full px-2 pt-1 rounded-tr-md rounded-br-md"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onReset}
            className="font-SpartanBold pt-1 text-cyanPrimary hover:underline"
          >
            Clear
          </button>
        </div>
      )}
      <ul
        className={`flex flex-col gap-20 sm:gap-5 ${
          tools.length > 0 ? "pt-10 sm:pt-0" : ""
        }`}
      >
        {filteredJobs &&
          Object.entries(filteredJobs).map(([key, value]) => {
            return <Card key={key} data={value} />;
          })}
      </ul>
    </div>
  );
};

export default List;
