export default function Education() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 font-oxygen w-full h-full p-3 phone:mx-5">
        <h1 className="text-4xl underline mt-32 ">EDUCATION</h1>
        <ul className="list-disc list-outside">
          <li className="mt-20">
            <h3 className="text-2xl">2015-2022 (Bachelor of Computer)</h3>
            <p className="text-xl">Sam Ratulangi University</p>
          </li>
          <li className="mt-20">
            <h3 className="text-2xl">2012-2015 (Senior High School)</h3>
            <p className="text-xl">SMA N 1 Siau Timur</p>
          </li>
          <li className="mt-20">
            <h3 className="text-2xl">2009-2012 (Junior High School)</h3>
            <p className="text-xl">SMP N 1 Siau Timur</p>
          </li>
          <li className="mt-20">
            <h3 className="text-2xl">2003-2009 (Elementary School)</h3>
            <p className="text-xl">SDN Inpress Akesimbeka</p>
          </li>
        </ul>
      </div>
    </>
  );
}