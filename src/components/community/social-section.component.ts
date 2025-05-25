import {BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "social-section",
  shadow: false
})
export class SocialSectionComponent extends BaseElement {

  data: SocialDataType[] = [
    {
      icon: 'mdi:discord',
      color: 'purple',
      heading: 'Discord',
      description: 'Join our Discord community to connect with other developers, share ideas, and get support.',
      buttonText: 'Join Now',
    },

    {
      icon: 'mdi:github',
      color: 'slate',
      heading: 'GitHub',
      description: 'Contribute to our open-source projects on GitHub. We welcome pull requests and issues.',
      link: 'https://github.com/ayu-sh-kr/dota-web',
      buttonText: 'View on GitHub'
    },

    {
      icon: 'mdi:twitter',
      color: 'blue',
      heading: 'Twitter',
      description: 'Follow us on Twitter for the latest updates, news, and announcements.',
      buttonText: 'Follow Us'
    },

    {
      icon: 'mdi:youtube',
      color: 'red',
      heading: 'YouTube',
      description: 'Watch our tutorials and webinars on YouTube to learn more about our projects.',
      buttonText: 'Subscribe Now'
    }
  ]

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <section-wrapper>
        <section-header>
          Our <span class="text-purple-500 dark:text-purple-600">Socials</span>
        </section-header>

        <div class="flex justify-between items-center gap-5 w-full flex-wrap">
          ${this.data.map((item) => {
            // language=html
            return `
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/3 rounded-xl dark:bg-slate-800 dark:text-white shadow-lg lg:p-4 md:p-3 p-2 space-y-3">
              <dota-icon name="${item.icon}" color="${item.color}" variant="link" size="xl"></dota-icon>
              <div class="space-y-2">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">${item.heading}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed tracking-wide">${item.description}</p>
              </div>
              <social-button 
                color="${item.color}" 
                text="${item.buttonText}" 
                link="${item.link || ''}">
              </social-button>
            </div>`
          }).join('')}
        </div>
      </section-wrapper>
    `
  }
}

export interface SocialDataType {
  icon: string;
  color: string;
  heading: string;
  description: string;
  link?: string;
  buttonText: string;
}