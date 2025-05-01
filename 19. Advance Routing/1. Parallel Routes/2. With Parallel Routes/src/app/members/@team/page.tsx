import Link from "next/link";

const TeamMembers = () => {
  // if (2 < 5) {
  //   throw new Error("Error happened");
  // }

  return (
    <>
      <h1>TeamMembers</h1>
      <Link href="/members/salaries">Check Out My Salaries</Link>
    </>
  );
};

export default TeamMembers;
