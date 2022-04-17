import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div id="Services">
            <h2 className='text-center mt-5'>This is services:</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis soluta nisi ex distinctio corrupti placeat officiis vel esse reprehenderit animi error temporibus iusto autem, rerum modi eveniet ab atque, impedit laboriosam voluptatum quos facere magnam voluptas repellendus. Deserunt id excepturi saepe ut, velit aliquam tenetur, reiciendis fugit consequuntur officiis temporibus cumque harum dicta. Recusandae, dolore rem. Doloribus molestiae fugit ducimus vel, quas nemo sequi nulla dolor, quibusdam est eum perferendis. Quidem at eius numquam hic earum architecto exercitationem vel ab sunt eligendi, illum id amet ipsum inventore rerum corrupti iure voluptas minus velit itaque temporibus! Excepturi accusamus eos fugit reiciendis inventore minus, ipsam suscipit illo impedit. Vel corporis soluta ad adipisci laborum ut molestiae! Quos magnam beatae iste quaerat esse fugiat minus tenetur animi eveniet quis rem consectetur quod expedita nam cumque veniam saepe voluptas, odio consequuntur. Dignissimos nulla natus labore adipisci, excepturi ex tempore non possimus modi consectetur quis nisi sapiente harum magni ab amet illo doloremque. Reprehenderit aspernatur fuga officia cupiditate, veritatis consectetur laudantium inventore, aut culpa, magnam aliquam est error doloribus nemo quod quaerat illum ut! Eos vel deleniti iusto ut vero asperiores accusantium quam sed placeat et corrupti, dolores sit quos officiis? Odit officia molestiae, corrupti placeat non nostrum unde id reiciendis pariatur qui nisi eos, eius harum. Quibusdam commodi dicta accusantium. Aliquam nihil qui laboriosam! Amet, expedita cum? Iusto debitis rem est saepe? Fugit quam hic adipisci impedit commodi obcaecati id est aspernatur inventore tempore nihil facilis minima ipsam iure vel velit eaque, quaerat doloremque, quos similique maiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis soluta nisi ex distinctio corrupti placeat officiis vel esse reprehenderi</p>
            <div className='text-center'>
                 <Link to = "/checkout">
                     <button className='btn btn-primary'>Checkout</button>
                 </Link>
            </div>
        </div>
    );
};

export default Services;