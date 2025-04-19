import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: "footer-component",
    shadow:false
})
export class FooterComponent extends BaseElement{

    constructor() {
        super();
    }

    render():string{
        // language=HTML
        return HTML`
            <footer class="font-dm mx-auto max-w-7xl px-3 lg:py-16 md:py-12 sm:py-8 py-6 mt-20">
                    <div class="px-5 grid grid-cols-2 md:grid-cols-4 place-content-between justify-items-center gap-4 ">
                        <!-- Logo and Copyright -->
                        <div>
                            <p class="text-gray-500 text-sm mt-2">&copy; 2025 | <a href="#" class="text-purple-600 hover:underline">MIT License</a></p>
                            <p class="text-gray-500 text-sm">A project by <a href="#" class="text-purple-600 hover:underline">Dota</a></p>
                        </div>

                        <!-- Overview -->
                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white">Overview</h3>
                            <ul class="mt-2 space-y-2 dark:text-white">
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Introduction</a></li>
                                <li><a href="/docs/Getting-Started.md" class="text-gray-600 dark:text-gray-300 hover:underline">Getting Started</a></li>
                                <li><a href="/docs/Component-Registration.md" class="text-gray-600 dark:text-gray-300 hover:underline">Component API</a></li>
                                <li><a href="/docs/Guides.md" class="text-gray-600 dark:text-gray-300 hover:underline">Guides</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">FAQ</a></li>
                            </ul>
                        </div>

                        <!-- Docs -->
                        <div >
                            <h3 class="font-semibold text-gray-900 dark:text-white">Docs</h3>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Framework Integrations</a></li>
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Static Site Generation</a></li>
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Config</a></li>
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Output Targets</a></li>
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Testing</a></li>
                                <li><a href="/resources" class="text-gray-600 dark:text-gray-300 hover:underline">Core Compiler API</a></li>
                            </ul>
                        </div>

                        <!-- Community -->
                        <div class="max-md:-ml-9">
                            <h3 class="font-semibold text-gray-900 dark:text-white">Community</h3>
                            <ul class="mt-2 flex gap-2 items-center">
                                <li>
                                  <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="discord">
                                    <dota-icon name="mdi:discord" color="slate" variant="ghost" size="md"/>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="twitter">
                                    <dota-icon name="mdi:twitter" color="slate" variant="ghost" size="md"/>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="github">
                                    <dota-icon name="mdi:github" color="slate" variant="ghost" size="md"/>
                                  </a>
                                </li>
                              <li>
                                <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline inline-flex pt-1.5" title="blog">
                                  <dota-icon name="mdi:blogger" color="slate" variant="ghost" size="md"/>
                                </a>
                              </li>
                            </ul>
                        </div>
                    </div>
                    <self-end></self-end>
            </footer>
        `
    }
}