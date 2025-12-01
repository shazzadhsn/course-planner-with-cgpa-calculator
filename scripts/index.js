let semCount = 0;
const addSemBtn = document.querySelector('#add-sem-btn');

// global variables
let delBtns, delElement, addCourseBtn, courseList, individualCourse, courseDelBtns, courseInput, creditInput, gradeInput;
let newSection, courseDisplay, semGPA, courseInputElement, creditInputElement, gradeInputElement;

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

    <div class="semester-bottom-box w-full rounded-xl mt-3 bg-white shadow-sm p-5">
        <div class="course-information grid md:grid-cols-3 gap-8">
            <div class="course-name flex flex-col gap-2">
                <label>Course</label>
                <input type="text" name="" class="course-input bg-[#F3F3F5] rounded-lg p-2">
            </div>
            <div class="course-credit flex flex-col gap-2">
                <label>Credits</label>
                <input type="number" name="" class="credit-input bg-[#F3F3F5] rounded-lg p-2">
            </div>
            <div class="course-grade flex flex-col gap-2">
                <label>Grade</label>
                <select name="" class="grade-input bg-[#F3F3F5] rounded-lg p-2">
                    <option value="A+"><span>A+</span> (<span>4.00</span>) 80 to 100</option>
                    <option value="A"><span>A</span> (<span>3.75</span>) 76 to 80</option>
                    <option value="A-"><span>A-</span> (<span>3.50</span>) 71 to 75</option>
                    <option value="B+"><span>B+</span> (<span>3.25</span>) 66 to 70</option>
                    <option value="B"><span>B</span> (<span>3.00</span>) 61 to 75</option>
                    <option value="B-"><span>B-</span> (<span>2.75</span>) 56 to 60</option>
                    <option value="C+"><span>C+</span> (<span>2.50</span>) 51 to 55</option>
                    <option value="C"><span>C</span> (<span>2.25</span>) 46 to 50</option>
                    <option value="D"><span>D</span> (<span>2.00</span>) 40 to 45</option>
                    <option value="F"><span>F</span> (<span>0.00</span>) 0 to 39</option>
                </select>
            </div>
        </div>
        <button class="add-course-btn bg-black text-white p-2 rounded-lg mt-5">Add Course</button>
        <p class="text-center mt-4">No courses added yet. Add your first course above!</p>
        <p class="hidden font-semibold mt-2">Courses</p>
        <div class="course-list">
            
        </div>
    </div>
    `;
    newSection.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = semCount;
    semContainer.appendChild(newSection);
    delBtns = document.querySelectorAll('.del-btn');

    for(let delBtn of delBtns) {
        delBtn.addEventListener('click', (event) => {
            parentSection = event.target.closest('section');
            parentSection.remove();
            if(semCount >= 1) {
                semCount--;
            }
        });
    }


    addCourseBtn = newSection.querySelector('.add-course-btn');
    // console.log(addCourseBtns);
        addCourseBtn.addEventListener('click', (event) => {
            event.target.nextSibling.nextSibling.classList.add('hidden');
            event.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('hidden');
            individualCourse = document.createElement('div');
            individualCourse.classList.add('individual-course', 'border-1', 'rounded-lg', 'mt-3', 'flex', 'justify-between', 'items-center', 'p-4')
            individualCourse.innerHTML = `
            <div class="course-left flex items-center gap-5">
                <div class="course-icon h-15 w-15 rounded-4xl bg-[#E0E7FF] flex justify-center items-center text-xl text-[#4F39F6]"><i class="fa-solid fa-book-open"></i></div>
                <div class="course-text">
                    <p class="course-display font-semibold"></p>
                    <p><span class="credit-display font-semibold text-xl"></span> Credits</p>
                </div>
            </div>

            <div class="course-right flex gap-5 justify-center items-center">
                <div class="course-grade">
                    <p class="grade-display text-lg font-semibold"></p>
                    <p><span class="gpa-display text-lg font-semibold"></span> GPA</p>
                </div>
                <button class="course-delete-icon py-1 px-5 rounded-md bg-red-100"><i class="fa-regular fa-trash-can text-red-500"></i></button>
            </div>
            `;

            event.target.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(individualCourse);

            courseInputElement = newSection.querySelector('.course-input');
            creditInputElement = newSection.querySelector('.credit-input');
            gradeInputElement = newSection.querySelector('.grade-input')
            courseInput = courseInputElement.value;
            creditInput = creditInputElement.value;
            gradeInput = gradeInputElement.value;

            if(gradeInput === 'A+') {
                semGPA = 4.00;
            } else if(gradeInput === 'A') {
                semGPA = 3.75;
            }  else if(gradeInput === 'A-') {
                semGPA = 3.50;
            } else if(gradeInput === 'B+') {
                semGPA = 3.25;
            } else if(gradeInput === 'B') {
                semGPA = 3.00;
            } else if(gradeInput === 'B-') {
                semGPA = 2.75;
            } else if(gradeInput === 'C+') {
                semGPA = 2.50;
            } else if(gradeInput === 'C') {
                semGPA = 2.25;
            } else if(gradeInput === 'D') {
                semGPA = 2.00;
            } else if(gradeInput === 'F') {
                semGPA = 0.00
            }

            if(courseInput && creditInput && gradeInput) {
                individualCourse.querySelector('.course-display').innerText = courseInput;
                individualCourse.querySelector('.credit-display').innerText = creditInput;
                individualCourse.querySelector('.grade-display').innerText = gradeInput;
                individualCourse.querySelector('.gpa-display').innerText = semGPA;

                courseInputElement.value = '';
                creditInputElement.value = '';
                gradeInputElement.value = '';
            } else {
                alert('Enter valid input form');
                event.target.nextElementSibling.nextElementSibling.nextElementSibling.removeChild(individualCourse);
            }

            

            
            
            

            courseDelBtns = document.querySelectorAll('.course-delete-icon');
            
            for(let courseDelBtn of courseDelBtns) {
                courseDelBtn.addEventListener('click', (event) => {
                    event.target.closest('.individual-course').remove();
                });
            }
            
        });
});



