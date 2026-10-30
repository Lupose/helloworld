import {PageIntro} from '@/components/page-intro';
import {Catalogue,TopicExplorer} from '@/components/research';
export const metadata={title:"国际司法案例"};
export default function Page(){return <><PageIntro number="International Case Law" title="国际司法案例" description="区分案件目录与具体裁判，区分判决、咨询意见及编辑介绍。尚未核实的段落与法律结论不作补写。"/><div className="shell page-body"><Catalogue kind="Case"/></div></>}