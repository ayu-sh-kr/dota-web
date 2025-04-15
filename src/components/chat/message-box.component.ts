import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";

@Component({
  selector:"message-box",
  shadow:false
})
export class MessageBoxComponent extends  BaseElement{

  content:string

  constructor(){
    super()
    this.content=this.innerHTML
  }

  render(){
    // language=html
    return `
        <section class="h-[60vh] overflow-y-auto custom-scrollbar p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex flex-col gap-4 ">
         ${this.content}
        </section>
    `
  }
}