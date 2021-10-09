import { Badge } from '@material-ui/core'
import { CollectionsBookmarkOutlined, HomeOutlined, PermIdentity, Search, SupervisedUserCircleOutlined, SupervisedUserCircleRounded, TrendingUpOutlined, VerifiedUser, VerifiedUserOutlined, VerifiedUserRounded, VerifiedUserTwoTone, VerticalAlignCenter } from '@material-ui/icons'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center  '>
<div className='flex flex-grow justify-evenly max-w-2xl'>
    <HeaderItem title='HOME' Icon={HomeOutlined}/>
    <HeaderItem title='TRENDING' Icon={TrendingUpOutlined}/>
    <HeaderItem title='VERIFIED' Icon={VerifiedUserTwoTone}/>
    <HeaderItem title='COLLECTION' Icon={CollectionsBookmarkOutlined}/>
    <HeaderItem title='SEARCH' Icon={Search}/>
    <HeaderItem title='ACCOUNT' Icon={PermIdentity}/>

    </div>          
<Image className='text-white object-contain' src='/huluLogo.png' height={100} width={200} />  
        </header>
    )
}

export default Header
