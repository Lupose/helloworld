export const chineseTopics: Record<string,string> = {
'Marine Environmental Protection':'海洋环境保护','Marine Biodiversity Beyond National Jurisdiction':'国家管辖范围以外区域海洋生物多样性','Climate Change and the Law of the Sea':'气候变化与海洋法','Environmental Impact Assessment':'环境影响评价','State Responsibility for Environmental Harm':'环境损害的国家责任','Sea-Level Rise and International Law':'海平面上升与国际法'};
export const recordChinese: Record<string,{name:string;aliases:string[];guide:string;type:string}>={
unclos:{name:'联合国海洋法公约',aliases:['海洋法公约'],guide:'从联合国条约目录进入原文；研究时分别记录条号、语言和版本。',type:'国际条约'},
bbnj:{name:'国家管辖范围以外区域海洋生物多样性协定（BBNJ协定）',aliases:['公海生物多样性协定','BBNJ'],guide:'从联合国官方文本页面选择语言。中文短名为阅读辅助，正式名称以官方文本为准。',type:'国际协定'},
cbd:{name:'生物多样性公约',aliases:['生物多样性','CBD'],guide:'秘书处页面提供分条阅读及多语种文本入口。',type:'国际条约'},
paris:{name:'巴黎协定',aliases:['气候协定','巴黎协议'],guide:'从 UNFCCC 官方页面查找文本与制度介绍；缔约情况应另查保存机关的最新记录。',type:'国际条约'},
pulp:{name:'乌拉圭河纸浆厂案（阿根廷诉乌拉圭）',aliases:['乌拉圭河纸浆厂案','纸浆厂案'],guide:'此处链接官方案件目录，不将案件目录等同于某份判决。尚未提供裁判段落导读。',type:'案件目录'},
cosis:{name:'小岛屿国家委员会气候变化咨询意见',aliases:['ITLOS','国际海洋法法庭','气候变化咨询意见'],guide:'官方文件为2024年5月21日咨询意见的更正文本。阅读时区分请求、法庭论证与结论。此处不提供法律结论摘要。',type:'咨询意见'},
vclt:{name:'维也纳条约法公约',aliases:['条约法','条约解释','VCLT'],guide:'阅读第1、4条适用范围与第31、32条解释规则。',type:'国际条约'},
arsiwa:{name:'国家对国际不法行为的责任条款',aliases:['国家责任','ARSIWA','归责','赔偿','反措施'],guide:'国际法委员会2001年条款，不是已经生效的国际公约。',type:'国际法委员会条款'},
statute:{name:'国际法院规约',aliases:['国际法渊源','ICJ Statute','一般法律原则'],guide:'从第38条识别法律来源，同时核对第59条。',type:'规约'},
'icj-climate':{name:'国家在气候变化方面的义务咨询意见',aliases:['ICJ 2025','气候变化咨询意见','国际法院气候咨询意见'],guide:'2025年7月23日咨询意见；详情提供目录阅读范围，不自动概括裁判结论。',type:'咨询意见'}
};
export const terminology=[{name:'环境影响评价',english:'Environmental Impact Assessment',aliases:['环境影响评价','环境影响评估','environmental impact assessment','eia'],topic:'Environmental Impact Assessment',note:'中文常见译法作为检索入口，具体文件用语以原文为准。'}];
