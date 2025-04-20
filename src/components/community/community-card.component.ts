// community-card.component.ts
import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "community-card",
  shadow: false,
})
export class CommunityCardComponent extends BaseElement {
  @Property({ name: 'image-src', type: String }) imageSrc: string = "";
  @Property({ name: 'name', type: String }) name: string = "";
  @Property({ name: 'role', type: String }) role: string = "";
  @Property({ name: 'github-link', type: String }) githubLink: string = "";
  @Property({ name: 'linkedin-link', type: String }) linkedinLink: string = "";
  @Property({ name: 'quote', type: String }) quote: string = "";

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <article class="community-card">
        <header class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <d-avatar img="${this.imageSrc}" img-alt="${this.name}" is-chip="true" color="purple" variant="solid" size="xl"></d-avatar>
            <div>
              <h1 class="text-sm">${this.name}</h1>
              <p class="text-sm text-gray-400">${this.role}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            ${this.githubLink ? `<a target="_blank" href="${this.githubLink}" class="text-gray-600 dark:text-gray-300 hover:underline" title="github">
              <dota-icon name="mdi:github" color="slate" variant="ghost" size="md"/>
            </a>` : ''}
            ${this.linkedinLink ? `<a href="${this.linkedinLink}" target="_blank">
              <dota-icon name="mdi:linkedin" color="slate" variant="ghost" size="md"/>
            </a>` : ''}
          </div>
        </header>
        <p class="font-medium text-gray-500 mt-4">
          &quot;
          ${this.quote}
          &quot;
        </p>
      </article>
    `;
  }
}