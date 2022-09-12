import { MarketClr, PriceClr, VolumeClr } from '../../../constants/colors'
import IconImg from '../../../static/top-navbar/icon.svg'

export const TopNavBarHeadersData = [
    {
        icon: IconImg,
        title: 'Price',
        value: 2.5,
        color: PriceClr
    },
    {
        icon: IconImg,
        title: 'Market Cap',
        value: '421.73M',
        color: MarketClr
    },
    {
        icon: IconImg,
        title: 'Volume',
        value: 27.82,
        color: VolumeClr
    },
]