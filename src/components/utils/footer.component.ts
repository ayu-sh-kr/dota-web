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
            <footer class="font-dm mx-auto max-w-7xl px-3 py-20 mt-20">
                    <div class="px-5 grid grid-cols-2 md:grid-cols-4 place-content-between justify-items-center gap-4 ">
                        <!-- Logo and Copyright -->
                        <div>
<!--                            <img src="logo.png" alt="Stencil Logo" class="h-6 mx-auto md:mx-0">-->
                            <p class="text-gray-500 text-sm mt-2">&copy; 2025 | <a href="#" class="text-blue-600 hover:underline">MIT License</a></p>
                            <p class="text-gray-500 text-sm">A project by <a href="#" class="text-blue-600 hover:underline">Dota</a></p>
                        </div>

                        <!-- Overview -->
                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white">Overview</h3>
                            <ul class="mt-2 space-y-2 dark:text-white">
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Introduction</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Getting Started</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Component API</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Guides</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">FAQ</a></li>
                            </ul>
                        </div>

                        <!-- Docs -->
                        <div >
                            <h3 class="font-semibold text-gray-900 dark:text-white">Docs</h3>
                            <ul class="mt-2 space-y-2">
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Framework Integrations</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Static Site Generation</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Config</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Output Targets</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Testing</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Core Compiler API</a></li>
                            </ul>
                        </div>

                        <!-- Community -->
                        <div class="max-md:-ml-9">
                            <h3 class="font-semibold text-gray-900 dark:text-white">Community</h3>
                            <ul class="mt-2 space-y-2">
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Blog</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">GitHub</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">X</a></li>
                                <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:underline">Discord</a></li>
                            </ul>
                        </div>
                    </div>
            </footer>
        `
    }
}