



import React from 'react'
class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: [
                {
                    id: 1,
                    productName:  'Trendy Womens T-shirt',
                    productPrice: 'Rs. 200',
                    productdelivery: 'Free Delivery',
                    
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kwl0akw0/top/t/p/e/s-tttp005282-tokyo-talkies-original-imag983a7jhzgmkg.jpeg?q=70',
                    productreview:'3.5',
                },
                {
                    id: 2,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 150',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/ke1pnrk0/top/p/p/z/xl-tttp003846-tokyo-talkies-original-imafutjsuhhacuev.jpeg?q=70',
                    productreview:'3.8',
                },
                {
                    id: 3,
                    productName: 'Trendy Womens T-shirt ',
                    productPrice: 'Rs. 200',
                    productdelivery: 'Free Delivery',
                    productImg: 'https://images.meesho.com/images/products/252029330/ditxf_400.webp',
                    productreview:'2.8',
                },
                {
                    id: 4,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 129',
                    productImg: 'https://images.meesho.com/images/products/269722327/omfko_400.webp',
                    productreview:'4.8',
                },
                {
                    id: 5,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 400',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/k/2/t/s-qegsc03-quintessentials-original-imagbdy5gujr2vuh-bb.jpeg?q=70',
                    productreview:'2.5',
                },
                {
                    id: 6,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 299',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/k/6/2/s-khtp000191-ketch-original-imagp29gn6c7echb.jpeg?q=70',
                    productreview:'3.8',
                },
                {
                    id: 7,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 199',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/z/c/w/s-4464-sheetal-associates-original-imagzzywqbdxzt3q.jpeg?q=70',
                    productreview:'3.1',
                },
                {
                    id: 8,
                    productName: 'Urbane lastest',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 249',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/l/3/b/xxl-4465-sheetal-associates-original-imagzzywyuzkadwh.jpeg?q=70',
                    productreview:'3.5',
                },
                {
                    id: 9,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.259',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/a/c/h/xxl-4456-sheetal-associates-original-imagphzuqqgnrbvg.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 10,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.149',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/t/v/9/m-ktttop177-kotty-original-imaghery2qy3yfz8.jpeg?q=70',
                    productreview:'2.8',
                },
                {
                    id: 11,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 190',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/t/v/9/m-ktttop177-kotty-original-imaghery2qy3yfz8.jpeg?q=70',
                    productreview:'3.3',
                },
                {
                    id: 12,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 250',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/l01blow0/top/m/q/z/m-gr6245-white-harpa-original-imagbwnh3xqhgfbn.jpeg?q=70',
                    productreview:'4.1',
                },
                {
                    id: 13,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 299',
                    productImg: 'https://images.meesho.com/images/products/282573288/xki5u_400.webp',
                    productreview:'3.8',
                },
                {
                    id: 14,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.180',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/d/6/i/s-4261-sheetal-associates-original-imagjtft5jrzgwph.jpeg?q=70',
                    productreview:'2.8',
                },
                {
                    id: 15,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/v/p/r/s-ct1-lavender-q-rious-original-imagaxzedkzhw2q3-bb.jpeg?q=70',
                    productreview:'4.8',
                  
                },
                {
                    id: 16,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/q/t/p/l-ct1-black-q-rious-original-imaggzhgnj9ky5xe.jpeg?q=70',
                    productreview:'4.9',
                  
                },
                {
                    id: 17,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/km3s1ow0/top/t/e/l/s-prw-1017-prettify-original-imagf2xfzcuzbceb.jpeg?q=70',
                    productreview:'3.8',
                  
                },
                {
                    id: 18,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/i/n/v/xs-stop2-lavender-q-rious-original-imagjmz6nkyaf4uw.jpeg?q=70',
                    productreview:'3.2',
                  
                },
                {
                    id: 19,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kylvr0w0/top/o/k/e/l-tttp005674-tokyo-talkies-original-imagaszutnf5jsdr.jpeg?q=70',
                    productreview:'2.8',
                },
                {
                    id:20,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/x/b/b/l-georgetetopcombo-stylander-original-imagg7ahf6hzzxfq.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 21,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/w/v/y/m-georgetetop-stylander-original-imagg7ahv9uq3zvu.jpeg?q=70',
                    productreview:'5',
                },
                {
                    id: 22,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kp8ntzk0/top/l/l/f/m-00128-top-dl-fashion-original-imag3gr4he5twhw3.jpeg?q=70',
                    productreview:'2.9',
                },
                {
                    id: 23,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/krqoknk0/top/g/e/u/s-tttp004276-tokyo-talkies-original-imag5gzmcjtuctzm.jpeg?q=70',
                    productreview:'1.8',
                },
                {
                    id: 24,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kyhlfgw0hlty2aw/t-shirt/g/d/f/3xl-jb-1202-crp-bsht-juneberry-original-imagapndr4huvrvt.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 25,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/c/s/s/l-gr6201-blue-harpa-original-imafzt9tujn9m6te-bb.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 26,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/v/p/r/s-ct1-lavender-q-rious-original-imagaxzedkzhw2q3-bb.jpeg?q=70',
                    productreview:'2.8',
                },
                {
                    id: 27,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/b/y/m/m-168-173-black-aahwan-original-imagapzwstwwctz8.jpeg?q=70',
                    productreview:'2.9',
                },
                {
                    id: 28,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kzvlua80/top/0/i/8/xl-top-d4-brucella-original-imagbsgxutg52unn.jpeg?q=70',
                    productreview:'4.2',
                },
                {
                    id: 29,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/kylvr0w0/top/d/k/g/l-tttp005927-tokyo-talkies-original-imagatfftvh56uhx.jpeg?q=70',
                    productreview:'3.9',
                },
                {
                    id: 30,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/c/s/s/l-gr6201-blue-harpa-original-imafzt9tujn9m6te-bb.jpeg?q=70',
                    productreview:'2.8',
                },
                {
                    id: 31,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/s/n/l/xxl-0013-top-dl-fashion-original-imaggf53g4fwqhye.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 32,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/p/o/k/xxl-pr-prw-342-14-fab-original-imagghygbr3mfgqw.jpeg?q=70',
                    productreview:'3.8',
                },
                {
                    id: 33,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/top/a/c/h/xxl-4456-sheetal-associates-original-imagphzuqqgnrbvg.jpeg?q=70',
                    productreview:'4.8',
                },
                {
                    id: 34,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/km6mxe80/top/p/t/p/m-st01-silkova-original-imagf5fm8rqfkdxe.jpeg?q=70',
                    productreview:'3.4',
                },
                {
                    id: 35,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://rukminim1.flixcart.com/image/612/612/koad9jk0/top/r/w/z/s-0078-top-dl-fashion-original-imag2rzffnkbgrzz.jpeg?q=70',
                    productreview:'3.8',
                  
                }
            ]
        }
    }



    render() {
        return (
            <>
                <div className='outerbox'>
                    {this.state.productList.map((list) => (
                        <div key={list.id} className='productlist'>
                            <img src={list.productImg} className='img' alt='phone' />
                           <div className='productName'>{list.productName} </div> 
                           <div className='price'>{list.productPrice}  <span className='onward'>onwards</span></div> 
                           <span className='delivert'>{list.productdelivery}</span><br/>
                           <span className='reviews'>{list.productreview} </span> <span className='rev'>Reviews</span>
                            

                        </div>
                    ))}
                </div>
            </>
        )
    }
}



export default Product