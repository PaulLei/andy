import { Search, Menu, ChevronDown } from "lucide-react";
import Logo from "/neurologic_solutions.horizontal.color_.black_.png";


interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const navText = scrolled ? "text-black" : "text-black";
  const navBg = scrolled ? "bg-white shadow-md" : "bg-transparent";

  const panelBg = scrolled ? "bg-white" : "bg-white/75 backdrop-blur-md";
  const panelText = "text-black";
  const panelChrome = "shadow-xl ring-1 ring-black/10";

  const dropdownWrapClass = `
    absolute left-1/2 top-full mt-4 w-[950px] -translate-x-1/2
    opacity-0 pointer-events-none translate-y-2
    group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
    transition-all duration-100
  `;

  const dropdownPad = "px-4 py-4";

  const grid4x1 = "mt-2 grid grid-cols-4 gap-6 place-items-stretch text-center";
  const grid3x1 = "mt-2 grid grid-cols-3 gap-6 place-items-stretch text-center";
  const grid2x1 = "mt-2 grid grid-cols-2 gap-6 place-items-stretch text-center";

  const cardClass =
    "w-full rounded-xl px-6 py-4 hover:bg-black/5 transition-colors";

  const navItemClass =
    "text-xs tracking-[0.22em] uppercase opacity-70 inline-flex items-center gap-1";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg} ${navText}`}
    >
      {/* ✅ wider container + more side padding */}
      <div className="max-w-screen-2xl mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* ✅ nudge logo left */}
          <a href="/" className="pl-2 inline-flex items-baseline">
            <img
              src={Logo}
              alt="Neurologic Solutions"
              className="h-20 w-auto"
            />
          </a>


          {/* ✅ nudge nav cluster right */}
          <div className="ml-auto flex items-center space-x-12 pr-2">
            <div className="hidden md:flex items-center space-x-8">
              {/* Products dropdown */}
              <div className="relative group">
                <a href="/products" className={navItemClass}>
                  Products
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className={dropdownWrapClass}>
                  <div className="absolute left-1/2 -top-4 h-4 w-full -translate-x-1/2" />

                  <div className={`rounded-2xl ${panelBg} ${panelText} ${panelChrome}`}>
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <a href="/platform/overview" className={cardClass}>
                          <div className="text-base font-light">EpiScalp</div>
                          <div className="mt-1 text-sm opacity-70">
                            Rapid EEG-Based Epilepsy Risk Assessment
                          </div>
                        </a>

                        <a href="/platform/features" className={cardClass}>
                          <div className="text-base font-light">EZTrack</div>
                          <div className="mt-1 text-sm opacity-70">
                            Simplified EEG Fragility for Surgical Planning
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical dropdown */}
              <div className="relative group">
                <a href="/clinical" className={navItemClass}>
                  Clinical
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className={dropdownWrapClass}>
                  <div className="absolute left-1/2 -top-4 h-4 w-full -translate-x-1/2" />

                  <div className={`rounded-2xl ${panelBg} ${panelText} ${panelChrome}`}>
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <a href="/clinical/evidence" className={cardClass}>
                          <div className="text-base font-light">Clinical evidence</div>
                          <div className="mt-1 text-sm opacity-70">
                            Outcomes and performance results
                          </div>
                        </a>

                        <a href="/clinical/publications" className={cardClass}>
                          <div className="text-base font-light">Publications</div>
                          <div className="mt-1 text-sm opacity-70">
                            Papers, posters, and abstracts
                          </div>
                        </a>

                        <a href="/clinical/use-cases" className={cardClass}>
                          <div className="text-base font-light">Use cases</div>
                          <div className="mt-1 text-sm opacity-70">
                            Where it helps most clinically
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company dropdown */}
              <div className="relative group">
                <a href="/company" className={navItemClass}>
                  Company
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className={dropdownWrapClass}>
                  <div className="absolute left-1/2 -top-4 h-4 w-full -translate-x-1/2" />

                  <div className={`rounded-2xl ${panelBg} ${panelText} ${panelChrome}`}>
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <a href="/company/about" className={cardClass}>
                          <div className="text-base font-light">About us</div>
                          <div className="mt-1 text-sm opacity-70">
                            Mission, vision, and story
                          </div>
                        </a>

                        <a href="/company/team" className={cardClass}>
                          <div className="text-base font-light">Team</div>
                          <div className="mt-1 text-sm opacity-70">
                            Leadership and contributors
                          </div>
                        </a>

                        <a href="/company/contact" className={cardClass}>
                          <div className="text-base font-light">Contact</div>
                          <div className="mt-1 text-sm opacity-70">
                            General inquiries and partnerships
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources dropdown */}
              <div className="relative group">
                <a href="/resources" className={navItemClass}>
                  Resources
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className={dropdownWrapClass}>
                  <div className="absolute left-1/2 -top-4 h-4 w-full -translate-x-1/2" />

                  <div className={`rounded-2xl ${panelBg} ${panelText} ${panelChrome}`}>
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <a href="/resources/news" className={cardClass}>
                          <div className="text-base font-light">Blog / News</div>
                          <div className="mt-1 text-sm opacity-70">
                            Company updates and announcements
                          </div>
                        </a>

                        <a href="/resources/media-kit" className={cardClass}>
                          <div className="text-base font-light">For Investors</div>
                          <div className="mt-1 text-sm opacity-70">
                            Company information relevant to investors
                          </div>
                        </a>

                        <a href="/resources/contact" className={cardClass}>
                          <div className="text-base font-light">Support</div>
                          <div className="mt-1 text-sm opacity-70">
                            Help and getting started
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request demo */}
              <a
                href="/request-demo"
                className={`${navItemClass} rounded-full px-4 py-2 border border-black/20 hover:bg-black/5 transition-colors bg-yellow-400`}
              >
                Request demo
              </a>
            </div>

            {/* Search */}
            <div className="relative group">
              <div className="flex items-center">
                <Search className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div
                  className="
                    overflow-hidden
                    w-0 opacity-0 ml-0
                    group-hover:w-56 group-hover:opacity-100 group-hover:ml-3
                    focus-within:w-56 focus-within:opacity-100 focus-within:ml-3
                    transition-all duration-300
                  "
                >
                  <input
                    type="text"
                    placeholder="Search…"
                    className="
                      w-full rounded-full border border-black/20 bg-white
                      px-4 py-2 text-sm font-light outline-none
                      focus:border-black/40
                    "
                  />
                </div>
              </div>
            </div>

            <button className="md:hidden hover:opacity-70 transition-opacity">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
