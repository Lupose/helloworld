import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"海洋法"};
export default function Page(){return <><PageIntro number="Law of the Sea" title="海洋法" description="海域与划界、航行与船舶、海洋资源、海洋环境保护及争端解决。与国际环境法保持独立而相互连接的研究入口。"/><div className="shell page-body"><Catalogue field="sea"/></div></>}