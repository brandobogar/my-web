export default function Education() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full py-10 font-oxygen phone:mx-5">
        <h1 className="text-4xl underline phone:text-3xl">EDUCATION</h1>
        <ul className="list-disc list-outside">
          <li className="mt-12">
            <h3 className="text-2xl phone:text-xl">
              2015-2022 (Bachelor of Computer)
            </h3>
            <p className="text-xl phone:text-lg">Sam Ratulangi University</p>
          </li>
          <li className="mt-12">
            <h3 className="text-2xl phone:text-xl">
              2012-2015 (Senior High School)
            </h3>
            <p className="text-xl phone:text-lg">SMA N 1 Siau Timur</p>
          </li>
          <li className="mt-12">
            <h3 className="text-2xl phone:text-xl">
              2009-2012 (Junior High School)
            </h3>
            <p className="text-x phone:text-lg">SMP N 1 Siau Timur</p>
          </li>
          <li className="mt-12">
            <h3 className="text-2xl phone:text-xl">
              2003-2009 (Elementary School)
            </h3>
            <p className="text-xl phone:text-lg">SDN Inpress Akesimbeka</p>
          </li>
        </ul>
      </div>
    </>
  );
}
