export default function SkillTag({skill}) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex rounded-full items-center text-xs tracking-wide bg-teal-400/20 px-3 py-1 font-medium leading-5 text-teal-300">
       {skill}
      </div>
    </li>
  );
}
