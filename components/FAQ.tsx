export type FAQItem={question:string;answer:string};
export default function FAQ({items}:{items:FAQItem[]}){return <div className="faq-list">{items.map(item=><details key={item.question}><summary>{item.question}<span className="faq-plus" aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div>}
