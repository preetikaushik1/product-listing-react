



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
                    
                    productImg: 'https://images.meesho.com/images/products/72925220/k2k8q_400.webp'
                },
                {
                    id: 2,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 150',
                    productImg: 'https://images.meesho.com/images/products/179331761/2mnxk_400.webp'
                },
                {
                    id: 3,
                    productName: 'Trendy Womens T-shirt ',
                    productPrice: 'Rs. 200',
                    productdelivery: 'Free Delivery',
                    productImg: 'https://images.meesho.com/images/products/252029330/ditxf_400.webp'
                },
                {
                    id: 4,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 129',
                    productImg: 'https://images.meesho.com/images/products/269722327/omfko_400.webp'
                },
                {
                    id: 5,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 400',
                    productImg: 'https://images.meesho.com/images/products/159848716/gxoiy_400.webp'
                },
                {
                    id: 6,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 299',
                    productImg: 'https://images.meesho.com/images/products/253366813/mnxjg_400.webp'
                },
                {
                    id: 7,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 199',
                    productImg: 'https://images.meesho.com/images/products/59665509/q9rtn_400.webp'
                },
                {
                    id: 8,
                    productName: 'Urbane lastest',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 249',
                    productImg: 'https://images.meesho.com/images/products/263909494/mm1qa_400.webp'
                },
                {
                    id: 9,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.259',
                    productImg: 'https://images.meesho.com/images/products/5319655/41o8w_400.webp'
                },
                {
                    id: 10,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.149',
                    productImg: 'https://images.meesho.com/images/products/230715846/txvfc_400.webp'
                },
                {
                    id: 11,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 190',
                    productImg: 'https://images.meesho.com/images/products/281293615/ekd4r_400.webp'
                },
                {
                    id: 12,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 250',
                    productImg: 'https://images.meesho.com/images/products/222037580/ozanm_400.webp'
                },
                {
                    id: 13,
                    productName: 'Trendy Womens T-shirt',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 299',
                    productImg: 'https://images.meesho.com/images/products/282573288/xki5u_400.webp'
                },
                {
                    id: 14,
                    productName: 'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs.180',
                    productImg: 'https://images.meesho.com/images/products/225386647/idrkj_400.webp'
                },
                {
                    id: 15,
                    productName:  'Trendy Womens T-shirt ',
                    productdelivery: 'Free Delivery',
                    productPrice: 'Rs. 300',
                    productImg: 'https://images.meesho.com/images/products/23101442/44e0a_400.webp'
                  
                }
            ]
        }
    }



    render() {
        return (
            <>
                <div>
                    {this.state.productList.map((list) => (
                        <div key={list.id} className='productlist'>
                            <img src={list.productImg} className='img' alt='phone' />
                            {list.productName} <br/> {list.productdelivery} <br/> {list.productPrice} 

                        </div>
                    ))}
                </div>
            </>
        )
    }
}



export default Product