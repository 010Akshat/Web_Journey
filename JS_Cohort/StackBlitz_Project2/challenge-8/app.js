const products={
    "T-Shirt":0,
    "Jeans":0,
    "Sneakers":0,
    "Hat":0
}
const cart=document.getElementById('cart-items');
const addToCart = (name,cost)=>{
    if(products[name]==0){
        products[name]=1;
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
        qty.innerText=`${products[name]}`;
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
        cart.appendChild(div);
    }
    else {
        products[name]++;
        qty.innerText=`${products[name]}`;
    }
}
