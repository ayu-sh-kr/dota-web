import { BaseElement, Component } from "@ayu-sh-kr/dota-core";
import { communityData, CommunityMember } from "./CommunityData";

@Component({
  selector: "community-component",
  shadow: false
})
export class CommunityComponent extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <section class="p-4 space-y-4">
        <section-header>
          Word from <span class="text-purple-600 dark:text-purple-500">Dota Team</span>
        </section-header>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          ${communityData.map(member => `
            <community-card
              image-src="${member.imageSrc}"
              name="${member.name}"
              role="${member.role}"
              github-link="${member.githubLink || ''}"
              linkedin-link="${member.linkedinLink || ''}"
              quote="${member.quote}"
            ></community-card>
          `).join('')}
        </div>
      </section>
`
  }
}