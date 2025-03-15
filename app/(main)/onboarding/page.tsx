import { redirect } from "next/navigation";
import { industries } from "@/data/industries";
import OnboardingForm from "@/components/onBoardingComponent/OnBoardingForm";
import { getUserOnboardingStatus } from "@/actions/user";



export default async function OnboardingPage() {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
