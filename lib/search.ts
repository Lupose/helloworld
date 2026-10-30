import {dossiers} from './content';
import { records, type RecordItem } from './data';
import { chineseTopics,recordChinese,terminology } from './terminology';
export type SearchHit={item:RecordItem;reason:string;article?:string};
export function searchRecords(query:string):SearchHit[]{
 const q=query.trim().toLowerCase().replace(/\s+/g,' ');
 if(!q)return records.map(item=>({item,reason:'浏览全部演示记录'}));
 const article=q.match(/(?:unclos|联合国海洋法公约|海洋法公约)\s*(?:第\s*(\d+)\s*条|(?:article|art\.?)\s*(\d+))/i);
 if(article){const n=article[1]||article[2];if(!dossiers.unclos.points.some(p=>p.label===n))return [];return [{item:records.find(r=>r.id==='unclos')!,reason:'精确匹配：UNCLOS 第'+n+'条；详情页提供核查后的条号、官方入口与编辑问题。非全文检索。',article:n}];}

 return records.flatMap(item=>{const zh=recordChinese[item.id];const direct=[item.title,item.short,item.institution,zh.name,...zh.aliases].join(' ').toLowerCase();if(q.split(/\s+/).every(w=>direct.includes(w)))return [{item,reason:'匹配资料名称、英文简称或人工整理的中文别名'}];const term=terminology.find(t=>t.aliases.includes(q));if(term&&item.topics.includes(term.topic))return [{item,reason:`匹配术语：${term.name} / ${term.english}（EIA）；关联来自平台专题整理，并非法院引用`}];const topic=item.topics.find(t=>t.toLowerCase().includes(q)||(chineseTopics[t]||'').includes(q));return topic?[{item,reason:`匹配编辑专题：${chineseTopics[topic]}；不表示法院的法律认定`}]:[];});
}
