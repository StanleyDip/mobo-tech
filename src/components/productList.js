import React, { Component } from 'react';
import Product from './Product';
import Oneplus8 from './OnePlus-8.jpg';
import Oneplus7pro from '../images/OnePlus-7-Pro.jpg';
import Oneplus7Tpro from '../images/OnePlus-7T-Pro.jpg';
import OneplusZ from '../images/Oneplus-Z.jpg';
import OneplusNord5G from '../images/OnePlus-Nord.jpg';
import Oneplus7T from '../images/OnePlus-7T.jpg';
import OneplusNordN105G from '../images/OnePlus-Nord-5G.jpg';
import SamsungGalaxyA325G from '../images/Samsung-Galaxy-A32-5G.jpg';
import SamsungGalaxyF41 from '../images/Samsung-Galaxy-F41.jpg';
import SamsungGalaxyA02Blue from '../images/Samsung-Galaxy-A02-Blue.jpg';
import SamsungGalaxyM31Prime1 from '../images/Samsung-Galaxy-M31-Prime-1.jpg';
import SamsungGalaxyM21s from '../images/Samsung-Galaxy-M21s.jpg';
import SamsungGalaxyA02sBlack from '../images/Samsung-Galaxy-A02s-Black.jpg';
function productList() {
    const item=[
        {name: "OnePlus 8",
        image:Oneplus8,
        Price:"47,000/-",
        },
        {name: "OnePlus 7 pro",
        image:Oneplus7pro,
        Price:"68,999/-",
        },
        {name: "OnePlus 7T Pro",
        image:Oneplus7Tpro,
        Price:"69,999/-",
        },
        {name: "OnePlus Z",
        image:OneplusZ,
        Price:"28,000/-",
        },
        {name: "OnePlus Nord 5G",
        image:OneplusNord5G,
        Price:"28,000/-",
        },
        {name: "OnePlus 7T",
        image:Oneplus7T,
        Price:"54,999/-",
        },
        {name: "OnePlus Nord N10 5G",
        image:OneplusNordN105G,
        Price:"34,990/-",
        },
        {
            name:"Samsung-Galaxy-A32-5G",
            image:SamsungGalaxyA325G,
            Price:"30,000/-",
        },
        {
            name:"Samsung-Galaxy-F41",
            image:SamsungGalaxyF41,
            Price:"22,000/-",
        },
        {
            name:"Samsung-Galaxy-A02-Blue",
            image:SamsungGalaxyA02Blue,
            Price:"15,000/-",
        },
        {
            name:"Samsung-Galaxy-M31-Prime-1",
            image:SamsungGalaxyM31Prime1,
            Price:"22,000/-",
        },
        {
            name:"Samsung-Galaxy-M21s",
            image:SamsungGalaxyM21s,
            Price:"26,000/-",
        },
        {
            name:"Samsung-Galaxy-A02s-Black",
            image:SamsungGalaxyA02sBlack,
            Price:"15,000/-",
        }
    ]
    const show =item.map(show => (<Product key={show.img} show={show}/>))
    return (
        <>
            {show}
        </>
    )
}

export default productList;