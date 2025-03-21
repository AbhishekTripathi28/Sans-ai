import { JsonValue } from "@prisma/client/runtime/library";

export interface salaryRangesTypes {
    role: string,
    min: number,
    max: number,
    median: number,
    location: string,
  }
    
  export interface intustryDataTypes{
    demandLevel: string,
    growthRate: number,
    id: string,
    industry: string,
    keyTrends: string[],
    lastUpdated: Date,
    marketOutlook: string,
    nextUpdate: Date,
    recommendedSkills: string[],
    salaryRanges: salaryRangesTypes[] ,
    topSkills: string[],
  }