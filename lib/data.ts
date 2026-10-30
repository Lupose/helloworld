export type RecordItem = { id: string; kind: 'Instrument' | 'Case'; title: string; short: string; institution: string; field: string[]; topics: string[]; url: string; note: string };
export const records: RecordItem[] = [
{ id:'unclos',kind:'Instrument',title:'United Nations Convention on the Law of the Sea',short:'UNCLOS',institution:'United Nations',field:['sea'],topics:['Marine Environmental Protection','Environmental Impact Assessment'],url:'https://www.un.org/depts/los/convention_agreements/texts/unclos/UNCLOS-TOC.htm',note:'Official treaty text and article navigation hosted by the United Nations.'},
{ id:'bbnj',kind:'Instrument',title:'Agreement under UNCLOS on the Conservation and Sustainable Use of Marine Biological Diversity of Areas beyond National Jurisdiction',short:'BBNJ Agreement',institution:'United Nations',field:['sea','environment'],topics:['Marine Biodiversity Beyond National Jurisdiction','Environmental Impact Assessment'],url:'https://www.un.org/bbnjagreement/en/bbnj-agreement/text-bbnj-agreement',note:'Official text entry point. No treaty-status information is reproduced in this prototype.'},
{ id:'cbd',kind:'Instrument',title:'Convention on Biological Diversity',short:'CBD',institution:'Convention Secretariat',field:['environment'],topics:['Marine Biodiversity Beyond National Jurisdiction','Environmental Impact Assessment'],url:'https://www.cbd.int/convention/text/',note:'Official convention text provided by the Convention Secretariat.'},
{ id:'paris',kind:'Instrument',title:'Paris Agreement',short:'Paris Agreement',institution:'UNFCCC',field:['environment'],topics:['Climate Change and the Law of the Sea'],url:'https://unfccc.int/process-and-meetings/the-paris-agreement',note:'Official UNFCCC information and treaty-text entry point.'},
{ id:'pulp',kind:'Case',title:'Pulp Mills on the River Uruguay (Argentina v. Uruguay)',short:'Pulp Mills',institution:'International Court of Justice',field:['environment'],topics:['Environmental Impact Assessment','State Responsibility for Environmental Harm'],url:'https://www.icj-cij.org/case/135',note:'Official case entry point. This record does not reproduce or summarize judicial findings.'},
{ id:'cosis',kind:'Case',title:'Request for an Advisory Opinion submitted by the Commission of Small Island States on Climate Change and International Law',short:'Climate Change Advisory Opinion',institution:'International Tribunal for the Law of the Sea',field:['sea','environment'],topics:['Climate Change and the Law of the Sea','Marine Environmental Protection'],url:'https://itlos.org/fileadmin/itlos/documents/cases/31/Advisory_Opinion/C31_Adv_Op_21.05.2024_corr.pdf',note:'Official advisory opinion, 21 May 2024. The link points to the corrected text; no paragraph-level claims are made here.'}
];
export const topics = [
{title:'Marine Environmental Protection',description:'Explore materials concerning the protection and preservation of the marine environment.',field:'sea'},
{title:'Marine Biodiversity Beyond National Jurisdiction',description:'Explore the legal instruments and institutions concerning biodiversity beyond national jurisdiction.',field:'both'},
{title:'Climate Change and the Law of the Sea',description:'A research entry point at the intersection of climate governance and ocean law.',field:'both'},
{title:'Environmental Impact Assessment',description:'Investigate assessment procedures, applicable instruments and related international proceedings.',field:'both'},
{title:'State Responsibility for Environmental Harm',description:'Organize research on responsibility, environmental harm and international dispute settlement.',field:'environment'},
{title:'Sea-Level Rise and International Law',description:'A developing research collection on sea-level rise and questions of international law.',field:'both'}
];
export const navigation = [
  {
    "href": "/",
    "label": "首页",
    "en": "Home"
  },
  {
    "href": "/law-of-the-sea",
    "label": "海洋法",
    "en": "Law of the Sea"
  },
  {
    "href": "/international-environmental-law",
    "label": "国际环境法",
    "en": "International Environmental Law"
  },
  {
    "href": "/treaties",
    "label": "国际条约与法律文件",
    "en": "Treaties & Instruments"
  },
  {
    "href": "/cases",
    "label": "国际司法案例",
    "en": "International Case Law"
  },
  {
    "href": "/topics",
    "label": "专题研究",
    "en": "Research Topics"
  },
  {
    "href": "/pathways",
    "label": "学习与研究路径",
    "en": "Learning & Research Pathways"
  },
  {
    "href": "/library",
    "label": "我的研究库",
    "en": "My Library"
  },
  {
    "href": "/about",
    "label": "关于与资料方法",
    "en": "About & Methodology"
  }
];
