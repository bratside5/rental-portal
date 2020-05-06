import tw from "twin.macro";

// Card
export const CardWrapper = tw.div`flex flex-col  border border-gray-300 my-4 shadow-lg rounded-lg`;
export const CardImage = tw.img`w-full h-48 bg-center bg-cover`;
export const CardBody = tw.div`py-2 px-3`;
export const CardList = tw.div`text-gray-600 text-xs uppercase font-semibold tracking-wide pt-2`;
export const CardTitle = tw.div`text-lg font-semibold text-gray-800 py-1 truncate`;
export const CardPrice = tw.div`py-1 text-gray-600 font-semibold`;
export const CardSubHeading = tw.div`text-gray-700 px-1`;
export const Divider = tw.div`flex h-px w-3/4 bg-gray-400 justify-center content-center align-middle items-center my-3 mx-auto text-center`;
export const IconContainer = tw.div`flex-col min-w-full text-xs font-semibold`;
export const CardIcons = tw.div`flex justify-center content-start align-text-top py-1 mt-1 text-gray-600 `;
export const IconText = tw.div`w-3/4 flex justify-start content-start pl-4 pb-1`;
export const CardExcerpt = tw.div`text-gray-700 px-1 max-h-full truncate`;

// Hero
export const HeroWrapper = tw.div`relative pt-16 pb-32 flex content-center items-center justify-center overflow-hidden`;
export const HeroImgContainer = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
export const ImgOverlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
export const MainWrapper = tw.div`relative sm:mx-10 md:mx-20`;
export const TextWrapper = tw.div`items-center flex flex-wrap`;
export const TextContainer = tw.div`w-full lg:w-6/12 px-4 ml-auto mr-auto text-center`;
export const HeroHeader = tw.h1`text-white font-semibold text-5xl`;
export const HeroSubHeader = tw.p`mt-4 md:p-8 text-lg text-gray-300`;

// List
export const GridWrapper = tw.div`px-8 py-4`;
export const GridContainer = tw.div`sm:px-8 md:px-20`;
export const SectionTitle = tw.div`text-2xl `;
export const CardContainer = tw.div`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 `;

// Navigation
export const HeaderClass = tw.header`border-b p-3 flex justify-between items-center`;
export const BrandLink = tw.div`font-bold`;
export const NavBar = tw.nav``;
export const Span = tw.span`text-xl`;
export const MenuFadeOut = tw.div`fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3`;
export const MenuFadeIn = tw.div`bg-black fixed top-0 left-0 w-full h-full z-50`;
export const NavBrand = tw.div`font-bold py-3`;
export const NavLinks = tw.li`text-blue-500 py-3 border-t border-b block`;
export const NavList = tw.div``;
export const NavWrapper = tw.div``;

// Loading
export const Spinner = tw.div`flex justify-center text-gray-800 items-center text-5xl font-bold  w-auto h-screen`;

// Card Tags
export const CardTags = tw.div`flex flex-row w-full justify-center px-2 py-4`;
export const TagContainer = tw.div`flex text-xs mx-2 py-2`;
export const TagSpan = tw.span`bg-gray-200 rounded-full shadow-md mx-2 px-3 py-2 text-gray-700 truncate`;

export const ContentWrapper = tw.div`flex-1 mx-auto p-8`;
export const FooterWrapper = tw.div`w-full p-4 fixed`;
