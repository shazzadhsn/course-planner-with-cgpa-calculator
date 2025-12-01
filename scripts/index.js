let semCount = 1;
const addSemBtn = document.querySelector('#add-sem-btn');

// global variables
let delBtns, delElement;
let newSection;

const semContainer = document.querySelector('.semesters-container');
// semester adding
addSemBtn.addEventListener('click', (event) => {
    semCount++;
    newSection = document.createElement('section');
    newSection.classList.add('semester-box', 'rounded-2xl', 'mt-5');
    newSection.setAttribute('id', semCount);
    newSection.innerHTML = `
        <div class="semester-top-box w-full rounded-xl bg-[#F1F3FF] flex justify-between p-5 shadow-sm items-center">
            <div class="top-left flex gap-8">
                <p class="sem-number">Semester: <span class="font-semibold">1</span></p>
                <p class="gpa hidden">GPA: <span class="font-semibold text-[#4F39F6]">0.00</span></p>
                <p class="credits hidden">Credits: <span class="font-semibold">0</span></p>
            </div>
            <button class="del-btn bg-red-100 py-1 px-3 rounded-lg"><i class="fa-regular fa-trash-can text-red-500"></i></button>
        </div>
    `;
    newSection.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = semCount;
    semContainer.appendChild(newSection);
    delBtns = document.querySelectorAll('.del-btn');

    for(let delBtn of delBtns) {
        delBtn.addEventListener('click', (event) => {
            parentSection = event.target.closest('section');
            parentSection.remove();
            if(semCount > 1) {
                semCount--;
            }
        });
    }


});



