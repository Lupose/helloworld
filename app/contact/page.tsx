import { PageIntro } from '@/components/page-intro';
export const metadata = { title: '联系我们 · Contact Us' };
export default function ContactPage() {
  return <><PageIntro number="Contact Us" title="联系我们" description="欢迎就海洋法、国际环境法及国际法律研究与 Oceanus 交流。我们欢迎学术建议、资料纠错、功能反馈及合作交流。"/><div className="shell page-body"><article className="contact-panel"><span className="eyebrow">CONTACT US / 公开联系</span><h2>Descamp Liu</h2><p>创始人及平台维护者<br/><span lang="en">Founder &amp; Platform Maintainer</span></p><p><a className="text-link" href="mailto:descampliu@gmail.com">descampliu@gmail.com</a></p><p lang="en">Oceanus welcomes academic suggestions, corrections to legal materials, product feedback and collaboration related to the Law of the Sea and International Environmental Law.</p><p className="section-footnote">点击邮箱将调用你设备上的邮件应用；本站不直接发送邮件或收集表单信息。</p></article></div></>;
}
