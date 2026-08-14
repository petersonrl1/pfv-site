export type SectionContent =
  | IntroContent
  | ZonesContent
  | LayersContent
  | ChecklistContent
  | StepsContent
  | ProcessingContent
  | FXContent
  | TroubleshootContent
  | TipsContent
  | GlossaryContent;

export interface Section {
  id: string;
  icon: string;
  title: string;
  color: string;
  content: SectionContent;
}

export interface IntroContent {
  type: "intro";
  highlights: string[];
}

export interface ZoneItem {
  name: string;
  description: string;
  color: string;
}

export interface ZonesContent {
  type: "zones";
  zones: ZoneItem[];
}

export interface LayerItem {
  name: string;
  summary: string;
}

export interface LayersContent {
  type: "layers";
  layers: LayerItem[];
  tips: string[];
}

export interface ChecklistItem {
  title: string;
  description: string;
}

export interface ChecklistContent {
  type: "checklist";
  checklists: ChecklistItem[];
}

export interface StepItem {
  title: string;
  content: string;
}

export interface StepsContent {
  type: "steps";
  steps: StepItem[];
}

export interface ProcessingChainItem {
  name: string;
  details: string;
}

export interface ProcessingContent {
  type: "processing";
  chain: ProcessingChainItem[];
}

export interface FXTypeItem {
  name: string;
  summary: string;
}

export interface FXContent {
  type: "fx";
  fxTypes: FXTypeItem[];
}

export interface ProblemItem {
  question: string;
  answer: string;
}

export interface TroubleshootContent {
  type: "troubleshoot";
  problems: ProblemItem[];
}

export interface TipsCategory {
  title: string;
  notes: string[];
}

export interface TipsContent {
  type: "tips";
  categories: TipsCategory[];
}

export interface TermItem {
  term: string;
  definition: string;
}

export interface GlossaryContent {
  type: "glossary";
  terms: TermItem[];
}
