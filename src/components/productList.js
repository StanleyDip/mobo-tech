import React from 'react';
import Product from './Product';
import Oneplus8 from '../images/OnePlus-8.jpg';
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
        {   id:"Oneplus8",
            name: "Oneplus 8",
            image:Oneplus8,
            Price:"47,000/-",
            Brand:"Oneplus"
        },
        {
            id:"Oneplus7pro",
            name: "Oneplus 7 pro",
            image:Oneplus7pro,
            Price:"68,999/-",
            Brand:"Oneplus"
        },
        {   id:"Oneplus7TPro",
            name: "Oneplus 7T Pro",
            image:Oneplus7Tpro,
            Price:"69,999/-",
            Brand:"Oneplus"
        },

        {   id:"OneplusZ",
            name: "Oneplus Z",
            image:OneplusZ,
            Price:"28,000/-",
            Brand:"Oneplus"
        },
        {
            id:"OneplusNord5G",
            name: "Oneplus Nord 5G",
            image:OneplusNord5G,
            Price:"28,000/-",
            Brand:"Oneplus"
        },
        {   id:"Oneplus7T",
            name: "Oneplus 7T",
            image:Oneplus7T,
            Price:"54,999/-",
            Brand:"Oneplus"
        },
        {   id:"OneplusNordN105G",
            name: "Oneplus Nord N10 5G",
            image:OneplusNordN105G,
            Price:"34,990/-",
            Brand:"Oneplus"
        },
        {   id:"SamsungGalaxyA325G",
            name:"Samsung-Galaxy-A32-5G",
            image:SamsungGalaxyA325G,
            Price:"30,000/-",
            Brand:"Samsung"
        },
        {
            id:"SamsungGalaxyF41",
            name:"Samsung-Galaxy-F41",
            image:SamsungGalaxyF41,
            Price:"22,000/-",
            Brand:"Samsung"
        },
        {
            id:"SamsungGalaxyA02Blue",
            name:"Samsung-Galaxy-A02-Blue",
            image:SamsungGalaxyA02Blue,
            Price:"15,000/-",
            Brand:"Samsung"
        },
        {
            id:"SamsungGalaxyM31Prime1",
            name:"Samsung-Galaxy-M31-Prime-1",
            image:SamsungGalaxyM31Prime1,
            Price:"22,000/-",
            Brand:"Samsung"
        },
        {
            id:"SamsungGalaxyM21s",
            name:"Samsung-Galaxy-M21s",
            image:SamsungGalaxyM21s,
            Price:"26,000/-",
            Brand:"Samsung"
        },
        {
            id:"SamsungGalaxyA02sBlack",
            name:"Samsung-Galaxy-A02s-Black",
            image:SamsungGalaxyA02sBlack,
            Price:"15,000/-",
            Brand:"Samsung"
        }
    ]
    const show =item.map(show => (<Product key={show.id} show={show}/>));
     
    
    return (
        
        <>
              {show}  
        </>
    )
}

export default productList;