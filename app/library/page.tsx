import Link from 'next/link';
import {PageIntro} from '@/components/page-intro';
export const metadata={title:'我的研究库'};
export default function Page(){return <><PageIntro number="My Library" title="我的研究库" description="为未来的收藏、私人笔记、标签与研究资料管理预留的空间。"/><div className="shell page-body"><div className="empty"><span className="eyebrow">尚未开放</span><h2>个人账户与研究保存功能尚未实现</h2><p>当前版本没有登录、收藏、私人笔记或云端保存。检索与浏览无需账户，也不会自动保存你的研究成果。</p><Link className="text-link" href="/search">先浏览公开演示资料 ↗</Link></div></div></>}
