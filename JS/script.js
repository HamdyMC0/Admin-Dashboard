const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const aside1 = document.querySelector(".aside1")

menu.addEventListener("click", () => {
    aside1.classList.add('show-aside');
})

if (close) {
    close.addEventListener('click', () => {
        aside1.classList.remove('show-aside');
    });
}

// =================================================================

const themeToggler = document.querySelector('.dark-btn');
const themeSpans = themeToggler.querySelectorAll('span');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark1');

    themeSpans[0].classList.toggle('bg-primary');
    themeSpans[0].classList.toggle('text-black');
    
    themeSpans[1].classList.toggle('bg-primary');
    themeSpans[1].classList.toggle('text-white');
});

// ================================================================= 

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <tr>
                            <td class="h-12 border-b-4 name1">${order.productName}</td>
                            <td class="h-12 border-b-4">${order.productNumber}</td>
                            <td class="h-12 border-b-4 payment1">${order.paymentStatus}</td>
                            <td class="h-12 border-b-4 ${order.shipping === 'Declind' ? 'danger' 
                            :order.shipping === 'Pending' ? 'warning'
                            :'primary'}">${order.shipping}</td>
                            <td class="primary h-12 border-b-4">Details</td>
                        </tr>
                    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})