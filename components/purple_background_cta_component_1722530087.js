/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722530087", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                <!-- Radial gradient -->
                <!-- Banana-themed background -->
                <div id="banana-background" class="absolute inset-0 bg-purple-900 bg-opacity-90 -z-10" aria-hidden="true">
                    <div class="absolute inset-0 bg-repeat opacity-10" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0zm0 10c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z\" fill=\"%23FFD700\" /></svg>')"></div>
                </div>
                <!-- Blurred shape -->
                <!-- Banana shape -->
                <div id="banana-shape" class="absolute bottom-0 right-0 w-64 h-64 -z-10 opacity-20" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M50 90c-22.091 0-40-17.909-40-40S27.909 10 50 10s40 17.909 40 40-17.909 40-40 40zm0-70c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30z" fill="#8B5CF6"/>
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-blue-300 pb-3" :class="[contentSubtitleStyle]">Soft Gains, Hard Results</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-white pb-4" :class="[contentCtaTitleStyle]"> Roll Into Profits: TP Trade Pro</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-gray-300" :class="[contentBodyStyle]">Wipe away market inefficiencies and clean up your portfolio with our revolutionary toilet paper trading platform.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-600" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-yellow-400",
                radialGradientSecondaryStyle: "bg-yellow-300",
                stopColorPrimaryStyle: "#FFD700",
                stopColorSecondaryStyle: "#FFA500",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-yellow-500 to-yellow-200",
                contentCtaTitleStyle: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600",
                contentBodyStyle: "text-yellow-800",
                contentCtaButtonPrimaryStyle:"text-yellow-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300",
                contentCtaButtonHoverStyle: "hover:bg-yellow-100",
                contentCtaArrowStyle: "text-yellow-600"
            };
        },
    });
                    