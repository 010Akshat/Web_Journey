const cart=document.getElementById('cart-items');
const empty=document.querySelector('.empty-cart');
const total=document.querySelector('#cart-total');
let totalCost=0;
const products={
    "T-Shirt":{qty:0,elements:null},
    "Jeans":{qty:0,elements:null},
    "Sneakers":{qty:0,elements:null},
    "Hat":{qty:0,elements:null}
}
const ifEmpty =()=>{
    if(cart.children.length>=2)empty.hidden=true;
    else  empty.hidden=false;
}
const updateTotal=()=>{
    total.innerText=`Total: ${totalCost}`;
}
const addToCart = (name,cost)=>{
    if(products[name].qty==0){
        products[name].qty=1;
        const div=document.createElement('div');
        const div1=document.createElement('div');
        const nameItem=document.createElement('span');
        nameItem.innerText=`${name}`;
        div1.appendChild(nameItem);
        const div2=document.createElement('div');
        const btn1=document.createElement('button');
        btn1.innerText='-';
        const btn2=document.createElement('button');
        btn2.innerText='+';
        const btn3=document.createElement('button');
        btn3.innerText='Remove';
        const qty=document.createElement('span');
        qty.innerText=`${products[name].qty}`;
        const price=document.createElement('span');
        price.innerText=`${cost}`;
        div2.appendChild(btn1);
        div2.appendChild(qty);
        div2.appendChild(btn2);
        div2.appendChild(price);
        div2.appendChild(btn3);
        div2.classList.add('quantity-controls');
        div.appendChild(div1);
        div.appendChild(div2);
        div.classList.add('cart-item');
        products[name].elements=div;
        btn1.addEventListener('click',()=>{
            qty.innerText=(--products[name].qty);
            totalCost-=Math.round(cost);
            if(products[name].qty==0){
                products[name].elements=null;
                div.remove();
                ifEmpty();
            }
            updateTotal();
        })
        btn2.addEventListener('click',()=>{
            totalCost+=Math.round(cost);
            qty.innerText=(++products[name].qty);
            ifEmpty();
            updateTotal();
        })
        btn3.addEventListener('click',()=>{
            totalCost-=(products[name].qty*Math.round(cost));
            updateTotal();
            products[name].qty=0;
            products[name].elements=null;
            div.remove();
            ifEmpty();
        })
        cart.appendChild(div);
        ifEmpty();
    }
    else {
        products[name].qty++;
        products[name].elements.querySelectorAll('span')[1].innerText=`${products[name].qty}`;
    }
    totalCost+=Math.round(cost);
    updateTotal();
}
