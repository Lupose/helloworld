import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"中英文资料检索"};
export default function Page(){return <><PageIntro number="Bilingual Catalogue Search" title="中英文资料检索" description="支持人工整理的中文名称、英文名称、常用译名、简称和指定条款入口。不是双语全文检索或 AI 问答。"/><div className="shell page-body"><Catalogue/></div></>}