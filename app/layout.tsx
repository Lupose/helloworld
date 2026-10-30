import type { Metadata } from 'next';
import { Header,Footer } from '@/components/chrome';
import './globals.css';
export const metadata: Metadata={title:{default:'OCEANUS — 海洋法与国际环境法研究',template:'%s | OCEANUS'},description:'中文优先、国际权威来源为本的海洋法与国际环境法研究原型。'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><a className="skip-link" href="#main">跳至正文</a><Header/><main id="main">{children}</main><Footer/></body></html>}
