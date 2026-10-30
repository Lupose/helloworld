import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"专题研究"};
export default function Page(){return <><PageIntro number="Research Topics" title="专题研究" description="以问题组织条约与司法资料。专题关联由平台编辑整理，不代表法院的法律认定。"/><div className="shell page-body"><TopicExplorer/></div></>}