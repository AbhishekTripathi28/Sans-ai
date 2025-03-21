import { intustryDataTypes } from "./dashboard/industryData";

export interface userTypes {
    bio: string,
    clerkUserId: string,
    industry: string,
    createdAt: Date,
    email: string,
    experience: number,
    id: string,
    imageUrl: string,
    industryInsight: intustryDataTypes,
    name: string,
    skills: string[],
    updatedAt: Date,
  
  }

  // id: string;
  // industry: string;
  // salaryRanges: JsonValue[];
  // growthRate: number;
  // demandLevel: string;
  // topSkills: string[];
  // marketOutlook: string;
  // keyTrends: string[];
  // recommendedSkills: string[];
  // lastUpdated: Date;
  // nextUpdate: Date;