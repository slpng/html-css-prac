const accordion = document.querySelector('.accordion');
const addFact = document.querySelector('.add-fact'); 

addFact.onclick = () => {
    const fact = `
    <div class="fact-container">
        <input type="checkbox" class="toggler">
        <div class="fact-header">
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa fa-plus"></i>
            <i class="fa fa-minus"></i>
        </div>
        <div class="fact-content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ex nostrum ut dolor cumque repudiandae excepturi necessitatibus tempora libero! Sit.</p>
        </div>
    </div>
    `;
    accordion.innerHTML += fact;
};