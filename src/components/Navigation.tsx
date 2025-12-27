import { Search, Menu, ChevronDown } from "lucide-react";
import Logo from "/neurologic_solutions.horizontal.color_.black_.png";
import { Link } from "react-router-dom";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const navText = "text-black";

  const navBg = scrolled
    ? "bg-neutral-100 shadow-sm shadow-black/10"
    : "bg-neutral-100/90 backdrop-blur-md";

  const panelBg = scrolled
    ? "bg-neutral-100"
    : "bg-neutral-100/95 backdrop-blur-md";

  const panelText = "text-black";
  const panelChrome = "shadow-xl ring-1 ring-black/10";

  const dropdownWrapClass = `
    absolute left-1/2 top-full mt-0 w-[950px] -translate-x-1/2
    opacity-0 pointer-events-none translate-y-2
    group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
    transition-all duration-200
  `;

  const dropdownPad = "px-3.5 py-3";

  const grid3x1 = "mt-2 grid grid-cols-3 gap-5 place-items-stretch text-center";
  const grid2x1 = "mt-2 grid grid-cols-2 gap-5 place-items-stretch text-center";

  const cardClass =
    "w-full rounded-lg px-3.5 py-3 hover:bg-black/5 transition-colors";

  const navItemClass =
    "text-[11px] tracking-[0.22em] uppercase opacity-80 inline-flex items-center gap-1";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg} ${navText}`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center">
            <img src={Logo} alt="Neurologic Solutions" className="h-14 w-auto" />
          </Link>

          <div className="ml-auto flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {/* Products */}
              <div className="relative group">
                <Link to="/products" className={navItemClass}>
                  Products
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <Link to="/episcalp" className={cardClass}>
                          <div className="text-sm font-light">EpiScalp</div>
                          <div className="mt-1 text-xs opacity-70">
                            Rapid EEG-Based Epilepsy Risk Assessment
                          </div>
                        </Link>

                        <Link to="/eztrack" className={cardClass}>
                          <div className="text-sm font-light">EZTrack</div>
                          <div className="mt-1 text-xs opacity-70">
                            Simplified EEG Fragility for Surgical Planning
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical */}
              <div className="relative group">
                <Link to="/clinical" className={navItemClass}>
                  Clinical
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <Link to="/clinical-evidence" className={cardClass}>
                          <div className="text-sm font-light">
                            Clinical evidence
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Outcomes and performance results
                          </div>
                        </Link>

                        <Link to="/publications" className={cardClass}>
                          <div className="text-sm font-light">
                            Publications
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Papers, posters, and abstracts
                          </div>
                        </Link>

                        <Link to="/use-cases" className={cardClass}>
                          <div className="text-sm font-light">Use cases</div>
                          <div className="mt-1 text-xs opacity-70">
                            Where it helps most clinically
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative group">
                <Link to="/company" className={navItemClass}>
                  Company
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <Link to="/about-us" className={cardClass}>
                          <div className="text-sm font-light">About us</div>
                          <div className="mt-1 text-xs opacity-70">
                            Mission, vision, and story
                          </div>
                        </Link>

                        <Link to="/team" className={cardClass}>
                          <div className="text-sm font-light">Team</div>
                          <div className="mt-1 text-xs opacity-70">
                            Leadership and contributors
                          </div>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <Link to="/resources" className={navItemClass}>
                  Resources
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <Link to="/blog-news" className={cardClass}>
                          <div className="text-sm font-light">
                            Blog / News
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Updates and announcements
                          </div>
                        </Link>

                        <Link to="/for-investors" className={cardClass}>
                          <div className="text-sm font-light">
                            For Investors
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Investor-relevant information
                          </div>
                        </Link>

                        <Link to="/support" className={cardClass}>
                          <div className="text-sm font-light">Support</div>
                          <div className="mt-1 text-xs opacity-70">
                            Help and getting started
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request demo */}
              <Link
                to="/Contact-Us"
                className={`${navItemClass} rounded-full px-3 py-1.5 border border-black/20 hover:bg-black/5 bg-yellow-400`}
              >
                Contact Us
              </Link>
            </div>

            {/* Search */}
            <div className="relative group">
              <div className="flex items-center">
                <Search className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div
                  className="
                    overflow-hidden w-0 opacity-0 ml-0
                    group-hover:w-56 group-hover:opacity-100 group-hover:ml-3
                    focus-within:w-56 focus-within:opacity-100 focus-within:ml-3
                    transition-all duration-300
                  "
                >
                  <input
                    type="text"
                    placeholder="Search Neurologic…"
                    className="w-full rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-light outline-none focus:border-black/40"
                  />
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <button className="md:hidden hover:opacity-70">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
