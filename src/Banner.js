import React from 'react'
import BannerImage from './BannerImage'

export default function Banner() {
let arr=[{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/19/1674135415109_indu2_2560x720_32x9Images.jpg?impolicy=resize&w=880&h=247.5",
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/17/1673949147875_bprk_2560x720_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/2/1672646067469_2560x720_2_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/11/24/1669313260464_tbs_2560x720_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/22/1674365653079_gjm_trailer_2560x720_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2021/11/30/1638270856530_2560x72014_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/5/1672924104517_karagar2_2560x720_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
},
{
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/13/1673590020363_2560x720_eken_32x9Images.jpg?impolicy=resize&w=880&h=247.5"
}]
  return (
    <BannerImage arr= {arr}/>
  )
}
