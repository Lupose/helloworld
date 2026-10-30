import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"国际环境法"};
export default function Page(){return <><PageIntro number="International Environmental Law" title="国际环境法" description="气候变化、生物多样性、环境影响评价、跨境损害与责任救济。国际环境法是独立研究领域，不是海洋法的附属分类。"/><div className="shell page-body"><Catalogue field="environment"/></div></>}