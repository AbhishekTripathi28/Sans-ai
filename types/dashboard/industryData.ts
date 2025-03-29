
export interface salaryRangesTypes {
    location: string,
    max: number,
    median: number,
    min: number,
    role: string,
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
    salaryRanges: salaryRangesTypes[] | unknown[],
    topSkills: string[],
  }