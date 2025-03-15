import { getResume } from "@/actions/resume";
import ResumeBuilder from "@/components/resumeComponent/ResumeBuilder";


export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}