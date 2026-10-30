import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"国际条约与法律文件"};
export default function Page(){return <><PageIntro number="Treaties & Legal Instruments" title="国际条约与法律文件" description="从正式名称、文件性质和官方原文开始研究。中文名称用于辅助阅读，原始资料保留其语言与来源。"/><div className="shell page-body"><Catalogue kind="Instrument"/></div></>}