import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {AfterInit, Property, String} from "@ayu-sh-kr/dota-core";
import { type MessageType } from "@dota/pages/chat.page.ts";

@Component({
  selector:"message-card",
  shadow:false
})
export class MessageCardComponent extends BaseElement{
  @Property({
    type:String,
    name:"message-type"
  })
  type!:  MessageType

  @Property({
    type:String,
    name:"message"
  })
  message!: string

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {
    const messageStyleConfigElement = messageStyleConfig[this.type];

    this.classList.add(...messageStyleConfigElement.split(" "))

  }


  render(){
  //   language=html
    return `
        <div>${this.message}</div>
    `
  }
}

const messageStyleConfig = {
  "USER": "self-end bg-purple-400 p-2 max-w-[45%] break-all dark:text-white dark:bg-purple-900 rounded-md",
  "SERVER": "self-start bg-purple-100 p-2 max-w-[50%] dark:text-gray-300 dark:bg-slate-800 text-slate-700 w-full break-all rounded-md"
}