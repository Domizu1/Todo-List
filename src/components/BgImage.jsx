
const BgImage = ({isDarkMode}) => {
    return (
        <div className="w-full h-[200px] lg:h-[300px] bg-no-repeat bg-cover bg-center
        bg-[url(./assets/bg-mobile-light.jpg)]
        md:bg-[url(./assets/bg-desktop-light.jpg)]
        dark:bg-[url(./assets/bg-mobile-dark.jpg)]
        md:dark:bg-[url(./assets/bg-desktop-dark.jpg)]
      "></div>
    )
}

export default BgImage