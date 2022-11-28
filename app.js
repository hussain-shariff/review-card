let reviewList = [
    {
        img:'/assets/p1.jpg',
        personName : 'Susan Smith',
        profession : 'Web Developer',
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum, et cumque, quos dolorem totam dolor nisi cupiditate maiores ea unde dolores? Blanditiis possimus, ut eaque temporibus aliquam consectetur ea."
    },
    {
        img:'/assets/p2.jpg',
        personName : 'Bill Anderson',
        profession : 'The Boss',
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, maiores excepturi. Praesentium dolores, harum illo facere dolorum, illum animi perspiciatis culpa deserunt ipsam incidunt numquam."
    },
    {
        img:'/assets/p3.jpg',
        personName : 'Peter Jones',
        profession : 'Intern',
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum recusandae tempore laborum illum laudantium numquam delectus animi dolorum, dolor, error accusamus quia aliquid neque minima fugiat nihil alias blanditiis fuga!"
    },
    {
        img:'/assets/p4.jpg',
        personName : 'Anna Johnson',
        profession : 'Web Designer',
        description : "As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs."
    }
]

let index = 0;

// content variables

const image = document.querySelector('img')
const personName = document.querySelector('.person-name');
const profession = document.querySelector('.profession');
const description = document.querySelector('.description');


// variables for event listening

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const randomButton = document.querySelector('.generate');

console.log(next);

next.addEventListener('click', function(){
    index ++;
    if (index > reviewList.length-1){
        index = 0;
    }

    changeReviewCard()
} )
prev.addEventListener('click', function(){
    index--;
    if (index < 0){
        index = reviewList.length-1;
    }
    changeReviewCard();
})

randomButton.addEventListener('click', function(){
    let randNum = Math.floor(Math.random() * reviewList.length)
    index = randNum;
    changeReviewCard();
})

window.addEventListener('DOMContentLoaded', function(){
    changeReviewCard();
})

function changeReviewCard(){
    let item = reviewList[index]
    image.src = item.img;
    personName.textContent = item.personName;
    profession.textContent = item.profession;
    description.textContent = item.description;
}