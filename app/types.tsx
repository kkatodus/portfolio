type ExperienceType = {
  Name: string;
  Location: string;
  Start: string;
  End: string;
  Keywords: string[];
  Company?: string;
  Descriptions: string[];
  key?: string;
  textcolor?: string;
  RelatedLinks?: string[];
  videoLink?: string;
  DownloadableDocuments?: { Text: string; link: string }[];
};

export default ExperienceType;
