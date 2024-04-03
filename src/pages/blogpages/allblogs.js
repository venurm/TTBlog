import React from 'react'
import { Bollywood } from './bollywood'
import { Fashionblog } from './Fashionblog'
import { General } from './general'
import { Beauty } from './beauty'
import { FashionOverview } from './overviewpages/fashion-overview'
import { BeautyOverview } from './overviewpages/beauty-overview'
import { GeneralOverview } from './overviewpages/general-overview'

export const Allblogs = () => {
  return (
    <div>
<BeautyOverview/>
<Bollywood/>
<FashionOverview/>
<GeneralOverview/>

    </div>
  )
}
